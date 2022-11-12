import express from 'express'
import { byCity, getBusesSeat, byType, createBus, getAllBuses, getBus } from '../controllers/buses.js';
import { isAdmin } from '../utils/verifyToken.js'


const router = express.Router();

//to add bus, only admin can add a new bus
router.post('/', isAdmin, createBus);


//to get bus by id
router.get('/find/:id', getBus);

// To get all buses
router.get('/', getAllBuses);

router.get('/bycity', byCity);
router.get('/bytype', byType);
router.get('/seat/:id', getBusesSeat)

export default router;

