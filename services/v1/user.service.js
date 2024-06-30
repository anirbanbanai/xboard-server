const User = require("../../models/v1/user.model");

exports.getAllUser = async (req, res) => {
  if (!req.query.page) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Page number is required",
    });
  }

  if (!req.query.limit) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Limit is required",
    });
  }

  if (!req.query.fields) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Fields are required",
    });
  }

  if (req.query.fields.includes("password")) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Password is not allowed",
    });
  }

  const page = parseInt(req.query.page);
  let limit = parseInt(req.query.limit);

  try {
    const totalUsers = await User.countDocuments({});
    const totalPages = Math.ceil(totalUsers / limit);
    const skip = (page - 1) * limit;

    const users = await User.find({})
      .skip(skip)
      .limit(limit)
      .select(req.query.fields.replace(/[{}]/g, "").replace(/,/g, " "));

    if (users.length === 0) {
      res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "No user found",
      });
    } else {
      res.status(200).json({
        acknowledgement: true,
        message: "OK",
        description: "Users retrieved successfully",
        data: users,
        totalUsers,
        totalPages,
      });
    }
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      description: error.message,
    });
  }
};

exports.getSingleUser = async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "User id is required",
    });
  }

  if (!req.query.fields) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Fields are required",
    });
  }

  if (req.query.fields.includes("password")) {
    res.status(400).json({
      acknowledgement: false,
      message: "Bad Request",
      description: "Password is not allowed",
    });
  }

  const user = await User.findById(req.params.id).select(
    req.query.fields.replace(/[{}]/g, "").replace(/,/g, " ")
  );

  if (!user) {
    res.status(404).json({
      acknowledgement: false,
      message: "Not Found",
      description: "User not found",
    });
  } else {
    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "User retrieved successfully",
      data: user,
    });
  }
};
