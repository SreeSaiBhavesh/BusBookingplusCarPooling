import Bus from "../models/Bus.js"
import Seat from "../models/Seat.js"

export const createBus = async (req,res, next) => {
    const newBus = new Bus(req.body);

    try{
        const savedBus = await newBus.save();
        res.status(200).json(savedBus);
    }catch(error){
        next(error);
    }
}

export const getBus = async (req,res, next) => {
    
    try{
        const bus = await Bus.findById(req.params.id);
        res.status(200).json(bus);
    }catch(error){
        next(error);
    }
}

export const getAllBuses = async (req,res, next) => {

    const {min, max, ...others} = req.query;
    try{
        const buses = await Bus.find({...others, price: {$gt: min || 1, $lt: max || 9999}}).limit(req.query.limit);
        res.status(200).json(buses);
    }catch(error){
        next(error);
    }
}

export const byCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {

        const list = await Promise.all(cities.map(city => {
            return Bus.countDocuments({city:city});
        }));
        res.status(200).json(list);

    } catch(err) {

        next(err);

    }
};

export const byType = async (req, res, next) => {
    try {

        const allSleeper = await Bus.countDocuments({type: "Sleeper"});
        const allSemisleeper = await Bus.countDocuments({type: "Semisleeper"});
        const allSeater = await Bus.countDocuments({type: "Seater"});
        const all21Sleeper = await Bus.countDocuments({type: "21Sleeper"});
        const allNormal = await Bus.countDocuments({type: "Normal"});
        
        res.status(200).json([
            {type: "Sleeper", count: allSleeper},
            {type: "Semisleeper", count: allSemisleeper},
            {type: "Seater", count: allSeater},
            {type: "21Sleeper", count: all21Sleeper},
            {type: "Normal", count: allNormal}
        ]);

    } catch(err) {

        next(err);

    }
};

export const getBusesSeat = async (req, res, next) => {
    try {
        const bus = await Bus.findById(req.params.id);
        const list = await Promise.all(bus.seats.map(seat => {
            return Seat.findById(seat);
        }));
        res.status(200).json(list);

    } catch(err) {

        next(err);

    }
}
