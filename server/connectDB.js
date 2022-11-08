require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = ()=>{
    const params = {useNewUrlParser:true}
    mongoose.connect(process.env.DB_URI,params)

    mongoose.connection.on('connected',()=>console.log("Server connected TO DataBase"))
    mongoose.connection.on('error',(err)=>console.log(`Occured error with DataBase ${err}`))
    mongoose.connection.on('disconnected',()=>console.log("DataBase disconnected"))
}


module.exports = connectDB