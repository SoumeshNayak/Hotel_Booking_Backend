import express from 'express'
import { createRoom, deleteRoom, getAllRoom, getOneRoom, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verify.js';

const router=express.Router();

router.post('/:hotelid',verifyAdmin,createRoom)
// Update
router.put('/:id',verifyAdmin,updateRoom)
//Delete
router.delete('/:id/:hotelid',verifyAdmin,deleteRoom)
// get
router.get('/:id',getOneRoom)
//get all
router.get('/',getAllRoom)


export default router