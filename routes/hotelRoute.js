import express, { Router } from 'express';
import { HotelLog, getHotel, getAllHotel, deleteHotel, updateHotel, findAllHotels } from '../controller/hotelController.js';




const router=Router();
router.post('/hotellog',HotelLog);
router.get('/:id',getHotel);
router.get('/',getAllHotel);
router.delete('/:id',deleteHotel);

router.put('/:id',updateHotel);
router.get('/',findAllHotels);


export default router

    