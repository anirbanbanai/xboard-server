const OTP = require('../../models/v1/upotp.model');
const User = require('../../models/v1/userdata.model');
const otpService = require('../../services/v1/upotp.service');


const sendOtp = async (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        acknowledgement: false,
        message: 'ValidationError',
        description: 'Email is required',
      });
    }
  
    const otp = crypto.randomUUID(100000, 999999).toString();
    const otpRecord = new OTP({ email, otp });
  
    try {
      await otpRecord.save();
  
      // send email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({
        acknowledgement: true,
        message: 'OTP sent to your email',
      });
    } catch (error) {
      res.status(500).json({
        acknowledgement: false,
        message: 'Error',
        description: error.message,
      });
    }
  };

const verifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const otpInstance = await OTP.findOne({ email, otp });

    if (!otpInstance) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Verify the user
    await User.updateOne({ email }, { verify: true });
    await OTP.deleteOne({ _id: otpInstance._id }); // Delete the OTP after verification

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    sendOtp,
  verifyOTP,
};
