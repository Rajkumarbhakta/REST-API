require("dotenv").config();
const express = require("express");

const app = express();
const dbConn = require("./Database/dbConn");
const blogRoute = require("./Routes/blogRoutes");
const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("Welcome");
})

app.use("/api",blogRoute);
const config = async()=>{
    try{
        await dbConn(process.env.MONGODB_URL);
         app.listen(PORT,()=>{
             console.log(`Success : Active Port ${PORT}`);
})
    }catch(error){
        console.log(error);
    }
};
config();