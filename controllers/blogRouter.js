const express = require("express");
const BlogModel = require("../models/BlogSchema");

const router = express.Router();

// Get All Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.render("Blogs/Blogs", { blogs: blogs });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});
router.get("/new", (req, res) => {
  res.render("Blogs/New");
});

// Get Blog By Id
router.get("/:id", async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.render("Blogs/ShowBlog", { blog: blog });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

// Create A New Blog
router.post("/", async (req, res) => {
  try {
    const newBlog = await BlogModel.create(req.body);
    res.redirect("/blog");
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot Create");
  }
});

// PUT: Update By ID
router.put("/:id", async (req, res) => {
  try {
    const Updatedblog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.send(Updatedblog);
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot Put");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id);
    console.log(deletedBlog);
    res.send("blog deleted");
  } catch (error) {
    console.log(error);
    res.status(403).send("cannot delete");
  }
});

module.exports = router;
