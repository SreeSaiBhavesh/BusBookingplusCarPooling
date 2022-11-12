import Seat from "../models/Seat.js";
import Bus from "../models/Bus.js"


export const createSeat = async (req, res, next) => {
    const busId = req.params.busId;
    const newSeat = new Seat(req.body);

    try{

        const savedSeat = await newSeat.save();

        try{
            //find bus and add seat
            await Bus.findByIdAndUpdate(busId, {
                $push: {seats: savedSeat._id}
            });
        }catch(err){
            next(err);
        }

        res.status(200).json(savedSeat);

    }catch(err){
        next(err);
    }
}

export const updateSeat = async (req, res, next) => {
    try {
      await Seat.updateOne(
        { "seatNumbers._id": req.params.id },
        {
          $push: {
            "seatNumbers": req.body.number
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      next(err);
    }
};

export const getSeat = async (req,res, next) => {
    
    try{
        const seat = await Seat.findById(req.params.id);
        res.status(200).json(seat);
    }catch(error){
        next(error);
    }
}

export const getAllSeats = async (req,res, next) => {
    try{
        const seats = await Seat.find();
        res.status(200).json(seats);
    }catch(error){
        next(error);
    }
}