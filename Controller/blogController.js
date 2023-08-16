const express = require("express");
const blogModels = require("../Models/blogModel");

const getAllBlogs = async (req, res) => {
    const { text, author, sort, select } = req.query;
    const queryObject = {};
    if (text) {
        queryObject.text = { $regex: text, $options: "i" };
    }
    if (author) {
        queryObject.author = { $regex: author, $options: "i" };
    }
    api = blogModels.find(queryObject);
    if (sort) {
        const sortData = sort.split(",").join(" ");
        api = api.sort(sortData);
    }
    if (select) {
        const selectData = select.split(",").join(" ");
        api = api.select(selectData);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;
    let skip = (page - 1) * limit;
    api = api.skip(skip).limit(limit);
    try {
        const Blogs = await api;
        res.status(200).json({
            Blogs,
            page: page,
            contents: Blogs.length,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getAllBlogs };
