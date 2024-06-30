const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please, provide your full name"],
    },
    email: {
      type: String,
      required: [true, "Please, provide a valid email address"],
      unique: [true, "Email already exist, try another"],
    },
    password: {
      type: String,
      required: [true, "Please, provide a strong password"],
    },
    image: { type: String },
    role: {
      type: String,
      default: "job-seeker",
      required: ["Please, choose one that suite you"],
      enum: ["admin", "employer", "job-seeker"],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    // rest info based on user
    otp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OTP",
    },

    resetToken: {
      type: String,
      lowercase: true,
    },

    // user account timing
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

/* encrypt user password */
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    this.password = this.encryptedPassword(this.password);
  } catch (error) {
    next(error);
  }
});

/* hash user password */
userSchema.methods.encryptedPassword = function (password) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
};

/* compare user password */
userSchema.methods.comparePassword = function (password, hash) {
  const isValid = bcrypt.compareSync(password, hash);
  return isValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
