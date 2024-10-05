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
    const { mini,maxi,...others }=req.query;
    try {
        const getHotels = await Hotel.find({...others,cheapestPrice:{ $gt: mini | 1 , $lt: maxi || 1000}})
        res.status(200).json(getHotels)
   } catch (error) {
        next(error)
   }
}
export const countByCity=async (req,res,next)=>{
     const cities=req.query.cities.split(",")
     try {
         const list = await Promise.all(cities.map(city=>{
          return Hotel.countDocuments({city:city})
         }))
         res.status(200).json(list)
    } catch (error) {
         next(error)
    }
 }
 export const countByType=async (req,res,next)=>{
     
     try {
          const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
          const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
          const resortCount = await Hotel.countDocuments({ type: "resort" });
          const villaCount = await Hotel.countDocuments({ type: "villa" });
          const cabinCount = await Hotel.countDocuments({ type: "cabin" });
         res.status(200).json([
          { type: "hotel", count: hotelCount },
          { type: "apartments", count: apartmentCount },
          { type: "resorts", count: resortCount },
          { type: "villas", count: villaCount },
          { type: "cabins", count: cabinCount },
        ])
    } catch (error) {
         next(error)
    }
 }




