const express = require('express')
const fs = require('fs')
var bodyParser = require('body-parser');

// let ejs = require('ejs')

let app  = express()
app.set('template engine', 'ejs');
app.use(bodyParser.json())
// app.use(express.bodyParser());



app.get('/', (req, res) =>{
    res.render('index.ejs')
})
app.post('/text', (req, res) =>{
    let data = fs.readFileSync('read.txt', {encoding: 'utf-8'})
    // const file = fs.readFileSync('path/to/data.txt', 'utf8');
    // if(file.indexOf("keyword") >= 0) {
        
    // }

    console.log(req.query)
    res.send({})
})


app.listen(3000, 'localhost')
