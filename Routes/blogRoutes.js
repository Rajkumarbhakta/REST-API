const express = require("express");
const router = express.Router();
const { getAllBlogs } = require("../Controller/blogController");
router.route("/blogs").get(getAllBlogs);
module.exports = router;
