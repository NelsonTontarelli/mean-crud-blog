const blogController = {};
const blogsModel = require('../models/blogs');

blogController.getBlogs = async (req, res) => {
    const blogs = await blogsModel.find();
    res.json(blogs);
};

blogController.createBlog = async (req, res) => {
    const blog = new blogsModel(req.body);
    await blog.save();
    res.json({
        "status": "Blog Saved"
    });
};

blogController.getBlog = async (req, res) => {
    const blog = await blogsModel.findById(req.params.id);
    res.json(blog)
};

blogController.editBlog = async (req, res) => {
    const blog = {
        name: req.body.name,
        last_name: req.body.last_name,
        country: req.body.country,
        age: req.body.age,
        title: req.body.title,
        text: req.body.text
    };

    await blogsModel.findByIdAndUpdate(req.params.id, { $set: blog }, { new: true });
    res.json({ status: "Blog Updated" });

};

blogController.deleteBlog = async (req, res) => {
    await blogsModel.findByIdAndDelete(req.params.id);
    res.json({ status: "Blog Deleted" });
};



module.exports = blogController;