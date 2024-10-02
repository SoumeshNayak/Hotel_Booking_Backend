import Hotel from "../model/Hotel.js"
import Room  from "../model/Room.js"

export const createRoom= async (req,res,next)=>{
    const hotelId = req.params.hotelid;
    const newRoom=new Room(req.body);

    try {
       const savedRoom=await newRoom.save();
       try {
        await Hotel.findByIdAndUpdate(hotelId,{$push: { rooms: savedRoom._id } })
       } catch (error) {
        next(error)
       } 
       res.status(201).json(savedRoom)
    } catch (error) {
       next(error) 
    }
}

export const updateRoom=async (req,res,next)=>{
    try {
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
        res.status(200).json(updatedRoom)
   } catch (error) {
        res.status(500).json(error)
   }
}

export const deleteRoom=async (req,res,next)=>{
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$pull: { rooms: req.params.id } })
           } catch (error) {
            next(error)
           } 
        res.status(200).json("Room Deleted")
   } catch (error) {
        res.status(500).json(error)
   }
}


export const getOneRoom=async (req,res,next)=>{
    try {
        const getOneRoom = await Room.findById(req.params.id)
        res.status(200).json(getOneRoom)
   } catch (error) {
        res.status(500).json(error)
   }
}

export const getAllRoom=async (req,res,next)=>{
    try {
        const getRooms = await Room.find()
        res.status(200).json(getRooms)
   } catch (error) {
        next(error)
   }
}