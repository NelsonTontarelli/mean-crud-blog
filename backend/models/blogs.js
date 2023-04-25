const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    name : {type: String, required: true},
    last_name : {type: String, required: true},
    country: {type: String, required: true},
    age: {type: Number, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true}
});

module.exports = mongoose.model('Blog', BlogSchema);