const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controllers');


router.get("/", blogController.getBlogs);
router.post("/", blogController.createBlog);
router.get("/:id", blogController.getBlog);
router.put("/:id", blogController.editBlog);
router.delete("/:id", blogController.deleteBlog);

module.exports = router;