const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    "text": {
        type: String,
        required: true
    },
    "author": {
        type: String,

    }
});
module.exports = mongoose.model("MyBlog", blogSchema);