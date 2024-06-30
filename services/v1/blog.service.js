const Blog = require('../../models/v1/blog.model');

const createBlog = async (data) => {
  const blog = new Blog(data);
  await blog.save();
  return blog;
};

const getBlogs = async () => {
  return await Blog.find();
};

const getBlogById = async (id) => {
  return await Blog.findById(id);
};

const updateBlog = async (id, data) => {
  return await Blog.findByIdAndUpdate(id, data, { new: true });
};

const deleteBlog = async (id) => {
  return await Blog.findByIdAndDelete(id);
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
