import Hotel from '../model/Hotel.js';
export const createHotel=async(req,res,next)=>{
    const newHotel=new Hotel(req.body)
    try {
         const savedHotel = await newHotel.save()
         res.status(200).json(savedHotel)
    } catch (error) {
         next(error)
    }
}

export const updateHotel=async (req,res,next)=>{
    try {
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
        res.status(200).json(updatedHotel)
   } catch (error) {
        res.status(500).json(error)
   }
}

export const deleteHotel=async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel Deleted")
   } catch (error) {
        res.status(500).json(error)
   }
}


export const getOneHotel=async (req,res,next)=>{
    try {
        const getOneHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getOneHotel)
   } catch (error) {
        res.status(500).json(error)
   }
}

export const getAllHotel=async (req,res,next)=>{
    try {
        const getHotels = await Hotel.find()
        res.status(200).json(getHotels)
   } catch (error) {
        next(error)
   }
}




