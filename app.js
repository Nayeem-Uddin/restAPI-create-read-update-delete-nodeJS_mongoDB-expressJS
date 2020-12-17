const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv/config')
app.use(bodyParser.json())
//import posts router here
const postsRouter = require('./routes/posts')

//make the middleware
app.use('/posts',postsRouter)  

//make a body-parser
// app.use(express.urlencoded({extended:false}))
//ROUTES

//connect to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
    console.log('database connected')
})
//how to start listening from the server
const PORT = process.env.PORT || 9000
app.listen(PORT,()=>{
    console.log(`Server has started from ${PORT}`)
})