//const fs = require('fs');
const ytdl = require('ytdl-core');
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());

app.get('/download',  (req,res)=>{
   var url= req.query.url;
   var format= req.query.f;
   var quality= req.query.q;
   var fullUrl = req.protocol + '://' + req.get('host');
 if(url&&format&&quality){
    if(format=="audio"&&quality=="high")
    {
         ytdl.getInfo(url,(err,info)=>{
         var yt = ytdl(url,{filter: "audioonly",quality:"highestaudio"});
         res.header('Content-Type', 'audio/mpeg');
         res.header("Content-Disposition", 'attachment;\  filename='+info.title+'.mp3');
         yt.pipe(res);
        })
    }
   else if(format=="audio"&&quality=="low")
   {
        ytdl.getInfo(url,(err,info)=>{
        var yt = ytdl(url,{filter: "audioonly",quality:"lowestaudio"});
        res.header('Content-Type', 'audio/mpeg');
        res.header("Content-Disposition", 'attachment;\  filename='+info.title.replace>
        yt.pipe(res);
        })
   }
   else if(format=="video"&&quality=="high")
   {
        ytdl.getInfo(url,(err,info)=>{
        var yt = ytdl(url,{filter: "audioonly",quality:"lowestaudio"});
        res.header('Content-Type', 'audio/mpeg');
        res.header("Content-Disposition", 'attachment;\  filename='+info.title.replace>
        yt.pipe(res);
        })
   }
   else if(format=="video"&&quality=="low")
   {
        ytdl.getInfo(url,(err,info)=>{
        var yt = ytdl(url,{filter: "audioonly",quality:"lowestaudio"});
        res.header('Content-Type', 'audio/mpeg');
        res.header("Content-Disposition", 'attachment;\  filename='+info.title.replace>
        yt.pipe(res);
        })
   }
  else
   {
    res.sendStatus(404)
   }
}else{

    res.redirect("/")

}  //  res.send("Example: "+fullUrl+"?url=https://youtu.be/xxx")
}).listen(PORT)
