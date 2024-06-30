/* external imports */
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const path = require("path");
const User = require("../../models/v1/userdata.model");
const bcrypt = require("bcrypt");
const { sendOTP } = require("./otp.service");

/* cloudinary config */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (_, file) => {
    return {
      folder: "airtalx",
      public_id: `${Date.now()}_${file.originalname
        .replace(/[^\w\s.-]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
    };
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (_, file, cb) => {
    const supportedImage = /jpg|png|jpeg/i;
    const extension = path.extname(file.originalname);

    if (supportedImage.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Must be a png/jpg/jpeg format"));
    }
  },
}).single("image");

/* user service functions */

const createUser = async (userData, file, res) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10); // Hash the password

  // Check if an image file is uploaded
  let imagePath = null;
  if (file) {
    const uploadResult = await cloudinary.uploader.upload(file.path);
    imagePath = uploadResult.secure_url;
  }

  const newUser = new User({
    ...userData,
    password: hashedPassword,
    image: imagePath,
  });

  if (newUser) {
    await newUser.save();
    await sendOTP({ body: newUser }, res);
  }
};

const getAllUsers = async () => {
  return await User.find();
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, userData, file) => {
  if (file) {
    const uploadResult = await cloudinary.uploader.upload(file.path);
    userData.image = uploadResult.secure_url;
  }
  return await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Add experience to a user
const addExperience = async (userId, experienceData) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  user.experience.push(experienceData);
  return await user.save();
};

module.exports = {
  upload,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
  addExperience,
};
