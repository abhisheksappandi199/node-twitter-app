const mongoose = require('mongoose')

const Schema = mongoose.Schema

const twitterSchema = new Schema({
    name : {
        type : String
    } ,
    tweets : {
        type : Array
    }
})

const Twitter = mongoose.model('Twitter',twitterSchema)

module.exports = Twitter