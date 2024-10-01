import User from '../model/User.js';


export const updateUser=async (req,res,next)=>{
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
        res.status(200).json(updatedUser)
   } catch (error) {
        next(error)
   }
}

export const deleteUser=async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User Deleted")
   } catch (error) {
        next(error)
   }
}


export const getOneUser=async (req,res,next)=>{
    try {
        const getOneUser = await User.findById(req.params.id)
        res.status(200).json(getOneUser)
   } catch (error) {
       next(error)
   }
}

export const getAllUser=async (req,res,next)=>{
    try {
        const getUser = await User.find()
        res.status(200).json(getUser)
   } catch (error) {
        next(error)
   }
}




