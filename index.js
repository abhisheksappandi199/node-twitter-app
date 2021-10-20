const express = require('express')
const configureDB = require('./config/database')
const router = require('./config/routes')
const port = 3033
const app = express()

configureDB()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hi server is up')
})

app.use(router)

app.listen(port ,() =>{
    console.log('server is running on port ',port);
})