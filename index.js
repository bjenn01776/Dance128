
const express = require('express')

const app = express();

 

app.get('/', (req,res)=>{
    console.log("Dir:: " + __dirname);
    res.sendFile ('./index.html',{root: __dirname})
})

app.get('/home', (req,res)=>{
    console.log("Dir:: " + __dirname);
    res.sendFile ('./index.html',{root: __dirname})
})


app.get('/cal', (req,res)=>{
    console.log("Dir:: " + __dirname);
    res.sendFile ('Pages/cal.html',{root: __dirname})
})


app.get('/mem', (req,res)=>{
    console.log("Dir:: " + __dirname);
    res.sendFile ('Pages/member.html',{root: __dirname})
})


app.listen(3000,(err)=>{

    if(err)
        console.log("error - abort")
    else
        console.log("Listening")

})


 