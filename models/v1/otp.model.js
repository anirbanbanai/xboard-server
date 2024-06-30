const mongoose = require("mongoose");
const mailSender = require("../../utils/email.util");

const otpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already exist, try another"],
  },
  otp: {
    type: String,
    required: true,
    unique: [true, "Given OTP already exist, try another"],
  },
  status: {
    type: String,
    enum: ["verified", "unverified"],
    default: "unverified",
  },

  // OTP timeline
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Define a function to send emails
async function sendVerificationEmail(name, email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Email Verification - AirTalX",
      `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Email Verification</title>
          <style>
            body {
              font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }
            .otp {
              background-color: #008080;
              width: fit-content;
              padding: 10px 15px;
              color: white;
              border-radius: 5px;
              font-size: 20px;
            }
          </style>
        </head>
        <body>
          <section>
            <p>Hello ${name},</p>
            <div style="margin-bottom: 10px;">
              <span>
                Thank you for registering with AirTalX. To complete your registration,
                we need to verify your email address.
              </span>
              <br />
              <span>
                Please, enter the following One-Time-Password (OTP) in the
                verification field:
              </span>
            </div>
            <p class="otp">
              ${otp}
            </p>
            <p>
              If you did not request this verification then ignore this email.
            </p>
            <p>
              <span>Best regards,</span>
              <br />
              <span style="font-weight: bold;">AirTalX Team</span>
            </p>
          </section>
        </body>
      </html>
      `
    );

    console.log("Email sent successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}

otpSchema.pre("save", async function (next) {
  console.log("New document saved to the database");

  // Only send an email when a new document is created
  if (this.isNew) {
    await sendVerificationEmail(this.name, this.email, this.otp);
  }

  next();
});

const OTP = mongoose.model("OTP", otpSchema);

module.exports = OTP;
