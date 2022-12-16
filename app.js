const express = require('express')
const cors = require('cors')
const app = express()
require('./config/db')
const userRouter = require('./routes/user.route')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/api/users/", userRouter)

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname +"/./views/index.html")
})

//invalide route handle
app.use((req,res,next)=>{
    res.status(404).send({
        message: "Route Found"
    })
})

//Server error handle
app.use((err,req,res,next)=>{
    res.status(500).send({
        message: "Soumthing Broke"
    })
})

module.exports = app