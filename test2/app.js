const express = require('express')
const fs = require('fs')

const bodyParser = require('body-parser');

// let ejs = require('ejs')

let app  = express()
app.use(bodyParser.json());
// app.use(express.bodyParser());


app.post('/text', (req, res) =>{
    let data = fs.readFileSync('read.txt', {encoding: 'utf-8'})
    // // le
    // // const file = fs.readFileSync('path/to/data.txt', 'utf8');
    if(data.indexOf(req.body.data) >= 0) {
        console.log('found one')
    }

    console.log(req.body)
    res.json({data: 'data'})
})


app.listen(3000, () =>{
    console.log('running server')
})
