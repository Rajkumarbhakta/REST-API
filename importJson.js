require("dotenv").config();
const mongoose = require("mongoose");
const dbConn = require("./Database/dbConn");
const blogModels = require("./Models/blogModel");
const json = require("./quote.json");

const importJson =async()=>{
    try{

        await dbConn(process.env.MONGODB_URL);
        await blogModels.deleteMany();
        await blogModels.create(json);
        console.log("Success : Json Imported");
    }catch(error){
        console.log(error);
    }
};
importJson();
