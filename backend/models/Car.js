import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
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
    
    
    rating:{
        type: String,
        min: 0,
        max: 10
    },
    seats: {
        type: Number,
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

export default mongoose.model("Car", CarSchema);