const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send emails to users
    const info = await transporter.sendMail({
      from: `${process.env.MAIL_USER} AirTalX Support`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email info: ", info);

    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
