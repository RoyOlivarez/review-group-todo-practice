const express = require('express')
const app = express()
const port = 3000
const path = require('path')// look this up later 

app.use(express.static(path.join(__dirname, '../dist'))) // what is this????, lookup dist
app.get('/Roy', (req, res) => res.send('Hello Roy!')) // new page
app.get('/getGroceries', (req, res) => res.send('Hello, Rob!')) 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

