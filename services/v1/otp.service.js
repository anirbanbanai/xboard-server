const otpGenerator = require("otp-generator");
const OTP = require("../../models/v1/otp.model");
const User = require("../../models/v1/userdata.model");

exports.sendOTP = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "User not found",
    });
  }

  const existingUser = await OTP.findOne({ email: user.email });

  if (existingUser) {
    res.status(401).json({
      acknowledgement: true,
      message: "Unauthorized",
      description: "User already registered",
    });
  } else {
    const otp = otpGenerator.generate(5, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const result = await OTP.create({
      name: user.name,
      email: user.email,
      otp,
      status: "unverified",
    });

    if (!result) {
      res.status(400).json({
        acknowledgement: false,
        message: "Bad Request",
        description: "Failed to send OTP",
      });
    } else {
      user.otp = result._id;
      await user.save({
        runValidators: false,
      });

      res.status(200).json({
        acknowledgement: true,
        message: "OK",
        description: "OTP sent successfully",
      });
    }
  }
};

exports.verifyOTP = async (req, res) => {
  const otp = req.params.otp;

  if (!otp) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Provide OTP for verification",
    });
  }

  const result = await OTP.findOne({ otp });

  if (!result) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "Please, provide a valid OTP",
    });
  }

  const user = await User.findOne({ email: result.email });

  if (result.status === "unverified") {
    result.status = "verified";
    await result.save({
      runValidators: false,
    });

    user.status = "active";
    await user.save({
      runValidators: false,
    });

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Account successfully verified",
    });
  } else {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Account already verified",
    });
  }
};
