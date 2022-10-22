require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const myMovieRoutes = require('./routes/my-movies')
const app = express()

//middleware:

//looks at json requests and puts it in req.body
app.use(express.json())

//logging middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes:
app.use('/my-movies', myMovieRoutes)

//connecting to the db
mongoose.connect(process.env.MONGO_URI)
.then(() => { 
    //listening to requests:
    app.listen(process.env.PORT, () => {
    console.log('connected to mongoDB and listening on port', process.env.PORT);
})
})
.catch((error) => {
    console.log(error)
})

