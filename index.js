import express from 'express'
const app=express()
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js'
import hotelsRoute from './routes/hotels.js'
dotenv.config()
const connect= async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to db");
        
    } catch (error) {
        console.log(error); 
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("db disconnected");
    
})
mongoose.connection.on("connected",()=>{
    console.log("db connected");
    
})
//Middlewares
app.use(express.json())



app.use('/auth',authRoute)
app.use('/users',usersRoute)
app.use('/rooms',roomsRoute)
app.use('/hotels',hotelsRoute)

app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage = err.message || "Somesthing went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8800,()=>{
    connect()
    console.log("CONNECTED to backend");
    
})