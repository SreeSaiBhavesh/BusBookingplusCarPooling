import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    Toplace: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        min: 0,
        max: 10
    },
    seats: {
        type: [String]
    },
    price: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },

});

export default mongoose.model("Bus", BusSchema);