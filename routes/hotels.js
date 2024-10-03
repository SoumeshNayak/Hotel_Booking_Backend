import express from 'express'
import mongoose from 'mongoose';
import Hotel from '../model/Hotel.js';
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getOneHotel, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verify.js';

const router=express.Router();
// create
router.post('/',verifyAdmin,createHotel)
// Update
router.put('/:id',verifyAdmin,updateHotel)
//Delete
router.delete('/:id',verifyAdmin,deleteHotel)
// get
router.get('/find/:id',getOneHotel)
//get all
router.get('/',getAllHotel)
router.get('/countByCity',countByCity)
router.get('/countByType',countByType)



export default router