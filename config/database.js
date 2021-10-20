const mongoose = require('mongoose')

const configureDB = () =>{
    //database config
    mongoose.connect('mongodb://localhost:27017/twitter-app',{ useNewUrlParser : true , useUnifiedTopology : true})
    .then(()=>{
        console.log('connected to DB');
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = configureDB