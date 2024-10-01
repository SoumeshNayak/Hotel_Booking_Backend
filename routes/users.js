import express from 'express'
import { deleteUser, getAllUser, getOneUser, updateUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verify.js';



const router=express.Router();

router.get("/checkauth",verifyToken,(req,res,next)=>{
    res.send("Hello user u r logged in")
})
// Update
router.put('/:id',updateUser)
//Delete
router.delete('/:id',deleteUser)
// get
router.get('/:id',getOneUser)
//get all
router.get('/',getAllUser)

export default router