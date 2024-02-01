const express = require("express");
const indexRouter = require("./blogs/blog.route");


const app = express();

app.use(express.json());

app.use("/blogroute", indexRouter)

app.listen(8000, ()=>{
    console.log("Application is running");
})