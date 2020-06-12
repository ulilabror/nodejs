//const fs = require('fs');
const ytdl = require('ytdl-core');
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const ffmpeg = require("ffmpeg");

app.use(cors());

app.get('/',(req,res)=>{
   var url= req.query.url;
   var format=req.query.f;
//   var quality=req.query.k;
   var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
   if(url){
   if(format=="mp4"){
           res.header("Content-Disposition", 'attachment;\  filename='+url+'.mp4');
           ytdl(url,{format:"mp4"}).pipe(res);
         }
   if(format=="mp3"){
          res.header("Content-Disposition", 'attachment;\  filename='+url+'.mp3');
          var stream= ytdl(url);
           //set stream for conversion
          var proc =  ffmpeg({source: stream});

    //currently have ffmpeg stored directly on the server, and ffmpegLocation is the path to its location... perhaps not ideal, but what I'm currently settled on. And then sending the output directly to the response.
          proc.setFfmpegPath(ffmpegLocation);
          proc.withAudioCodec('libmp3lame')
        .toFormat('mp3')
        .output(res)
        .run()
         }
    }else{
//    res.json({"Example": fullUrl+"?url=https://youtu.be/xxx","dev":"mulila"})
    }
}).listen(PORT)
