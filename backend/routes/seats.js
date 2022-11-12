import express from 'express'
import { isAdmin } from '../utils/verifyToken.js';
import { createSeat, getAllSeats, getSeat, updateSeat } from '../controllers/seats.js';


const router = express.Router();




//for add new seat, only admin can add a new seat
router.post('/:busId',  isAdmin, createSeat);

//update seat
router.put("availability/:id", updateSeat);
//to get seat by id
router.get('/:id', getSeat);

// To get all seats
router.get('/', getAllSeats);


export default router;