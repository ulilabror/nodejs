//const fs = require('fs');
const ytdl = require('ytdl-core');
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

app.get('/',(req,res)=>{
   var url= req.query.url;
   var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
   if(url){
    res.header("Content-Disposition", 'attachment;\  filename='+url+'.mp4');
    ytdl(url,{format:"mp4"}).pipe(res);
     }else{
  res.json({"Example": fullUrl+"?url=https://youtu.be/xxx"})
}
}).listen(PORT)
