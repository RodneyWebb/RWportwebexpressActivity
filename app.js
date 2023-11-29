//Do some initial setup so Express works
//These things we dont really need to worry about
//Just do them when we make an Express app.

//Initial Setup
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '/public')))

//CRUD:         Create, Read, Update, Destroy
//Request Types: Post,  Get,    Put,  Delete

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/index.html'))
})

//      path request, response
app.get("/webbman", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/RWhindex.html'))
})

app.get("/hol", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/RWholindex.html'))
})

app.get("/rps", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/RWrpsindex.html'))
})


app.listen(3000)
console.log("Rodney's Projects are Running AND Working!")