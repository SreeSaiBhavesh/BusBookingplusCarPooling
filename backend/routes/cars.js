import express from 'express'
import { createCar, getAllCars, getCar, byType, byCity } from '../controllers/cars.js';
import { isAdmin } from '../utils/verifyToken.js'


const router = express.Router();

//to add bus, only admin can add a new bus
router.post('/', isAdmin, createCar);


//to get bus by id
router.get('/find/:id', getCar);

// To get all buses
router.get('/', getAllCars);

router.get('/bycity', byCity);
router.get('/bytype', byType);

export default router;

