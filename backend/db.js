const mongoose = require('mongoose')


// Step 2
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/postManagerDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
err => {
    if(!err)
    console.log('Mongodb connection succeeded.')
    else
    console.log('Error while connecting MongoDB : '+ JSON.stringify(err,undefined,2))
})