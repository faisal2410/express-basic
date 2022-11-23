const express = require('express');
const app = express();

// get post delete put patch

// route, cb

// app.all("/home",(req,res)=>{
//     console.log("=======>",req.method)
// res.send(`<h1>Hello from express</h1>`)
// })

app.get("/",(req,res)=>{
    console.log("=======>",req.method)
    res.send(`<h1>Hello from get</h1>`)
})
app.post("/",(req,res)=>{
    console.log("=======>",req.method)
    res.send(`<h1>Hello from post</h1>`)
})
app.put("/",(req,res)=>{
    console.log("=======>",req.method)
    res.send(`<h1>Hello from put</h1>`)
})
app.patch("/",(req,res)=>{
    console.log("=======>",req.method)
    res.send(`<h1>Hello from patch</h1>`)
})
app.delete("/",(req,res)=>{
    console.log("=======>",req.method)
    res.send(`<h1>Hello from delete</h1>`)
})


app.listen(8000,()=>{
    console.log(`Server is running at port 8000`)
})