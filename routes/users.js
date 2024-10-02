import express from 'express'
import { deleteUser, getAllUser, getOneUser, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verify.js';



const router=express.Router();

// router.get("/checkauth",verifyToken,(req,res,next)=>{
//     res.send("Hello user u r logged in")
// })
// router.get("/checkauth/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user,u r logged in and you can delete your account")
// })
// router.get("/checkauth/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello admin,u r logged in and you can delete your account")
// })
// Update
router.put('/:id',verifyUser,updateUser)
//Delete
router.delete('/:id',verifyUser,deleteUser)
// get
router.get('/:id',verifyUser,getOneUser)
//get all
router.get('/',verifyAdmin,getAllUser)

export default router