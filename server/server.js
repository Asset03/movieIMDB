require('dotenv').config()
const express = require('express')
const cors = require('cors')
const movieRoutes = require('./routes/movies')
const app = express()
const connectDB = require('./connectDB')

connectDB()

app.use(express.json())
app.use(cors())

app.use('/api',movieRoutes)

const port = process.env.PORT|| 8080

app.listen(port,()=>console.log(`Server started on port ${port}...`))