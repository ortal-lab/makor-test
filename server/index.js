const express = require("express");
const app = express();
const {getData}=require("./getData")
const router=require("./router")
const cors= require("cors");
app.use(cors());
app.use('/',router);


app.listen(5000,()=>{
    console.log("server is runing");
})