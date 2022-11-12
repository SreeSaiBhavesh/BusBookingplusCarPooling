import Car from "../models/Car.js";

export const createCar = async (req,res, next) => {
    const newCar = new Car(req.body);

    try{
        const savedCar = await newCar.save();
        res.status(200).json(savedCar);
    }catch(error){
        next(error);
    }
}

export const getCar = async (req,res, next) => {
    
    try{
        const car = await Car.findById(req.params.id);
        res.status(200).json(car);
    }catch(error){
        next(error);
    }
}

export const getAllCars = async (req,res, next) => {

    const {min, max, ...others} = req.query;
    try{
        const cars = await Car.find({...others, price: {$gt: min || 1, $lt: max || 9999}}).limit(req.query.limit);
        res.status(200).json(cars);
    }catch(error){
        next(error);
    }
}

export const byCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {

        const list = await Promise.all(cities.map(city => {
            return Car.countDocuments({city:city});
        }));
        res.status(200).json(list);

    } catch(err) {

        next(err);

    }
};

export const byType = async (req, res, next) => {
    try {

        const allAudi = await Car.countDocuments({company: "Audi"});
        const allJaguar = await Car.countDocuments({company: "Jaguar"});
        const allBenz = await Car.countDocuments({company: "Benz"});
        const allToyota = await Car.countDocuments({company: "Toyota"});
        const allsuzuki = await Car.countDocuments({company: "suzuki"});
        
        res.status(200).json([
            {company: "Audi", count: allAudi},
            {company: "Jaguar", count: allJaguar},
            {company: "Benz", count: allBenz},
            {company: "Toyota", count: allToyota},
            {company: "suzuki", count: allsuzuki}
        ]);

    } catch(err) {

        next(err);

    }
};

