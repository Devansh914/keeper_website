const http=require('http');
port=8000;
const express=require('express');
const app= express();

app.listen(port,function(err){
    if(err){
        console.log("Error aa gya bhai",err);
        return;
    }
    console.log(`server is running on port: ${port}`);
})