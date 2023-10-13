const express = require('express')
// test1
const app  = express()

app.get('/', (req, res) =>{
    res.sendFile('./template/index.html', {root: __dirname})
})


app.listen(3000, 'localhost')
