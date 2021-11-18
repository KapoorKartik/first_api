const express = require('express');
const data = require("./user.json")
console.log(data)


const app = express();

app.get('/', (req, res) =>{
    res.send('Welcome to Home page')
})
app.get('/user',(req, res) =>{
    res.send(data)
})

app.listen(2525,function(){
    console.log("listening on port 2525")
});