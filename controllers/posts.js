const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("index.html", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  }
 }
