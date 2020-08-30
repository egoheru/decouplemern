require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require ('cors')

const path = require ('path')

// importing files
var postMessageRoutes = require('./controllers/postMessageController')

// Define Global Variables
var app = express()
const log = console.log;
const PORT = process.env.PORT || 4000; // Step 1

//Configuration of Variables 
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(PORT,()=>console.log('Server started at : ' + PORT) )

// app.use('/',postMessageRoutes)
app.use('/postMessages',postMessageRoutes)

