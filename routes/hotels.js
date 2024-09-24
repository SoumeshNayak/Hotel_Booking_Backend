import express from 'express'
import mongoose from 'mongoose';
import Hotel from '../model/Hotel.js';
import { createHotel, deleteHotel, getAllHotel, getOneHotel, updateHotel } from '../controllers/hotel.js';

const router=express.Router();
// create
router.post('/',createHotel)
// Update
router.put('/:id',updateHotel)
//Delete
router.delete('/:id',deleteHotel)
// get
router.get('/:id',getOneHotel)
//get all
router.get('/',getAllHotel)


export default router