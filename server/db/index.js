//Boiler plate for database below under index.js in db folder
// require("dotenv").config()
const mongoose = require('mongoose')

let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/personalRecipeDatabase'


mongoose 
    .connect(dbUrl)//'mongodb://127.0.0.1:27017/personalRecipeDatabase')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })
    mongoose.set('debug', true)
    const db = mongoose.connection

module.exports = db