const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdby: {
      type: String,
    },
  },
  {
    timestamps: true, 
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
