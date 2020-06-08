//const fs = require('fs');
const ytdl = require('ytdl-core');
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get('/',(req,res)=>{
   var url= req.query.url;
   res.header("Content-Disposition", 'attachment;\  filename='+url+'.mp4');
   ytdl(url,{format:"mp4"}).pipe(res);
}).listen(3000,()=>console.log("ok"))
