const express = require("express");
const BlogModel = require("../models/BlogSchema");

const router = express.Router();

// add privacy to this routes
// middleware function
 router.use((req, res, next) => {
 if (req.session.loggedIn){
  next()
 }else{
  res.redirect('/user/signin')
 }
 })

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

// Render the Edit Form
router.get("/:id/edit", async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    res.render("Blogs/EditBlog", { blog: blog });
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot get");
  }
});

// Create A New Blog
router.post("/", async (req, res) => {
  try {
    
    // set the author to the loggedIn user
    req.body.author = req.session.username
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
    if (req.body.sponsored === "on") {
      req.body.sponsored = true;
    } else {
      req.body.sponsored = false;
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" }
    );
    res.redirect("/blog");
  } catch (error) {
    console.log(error);
    res.status(403).send("Cannot put");
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id);
    console.log(deletedBlog);
    res.redirect("/blog");
  } catch (error) {
    console.log(error);
    res.status(403).send("cannot delete");
  }
});

module.exports = router;
