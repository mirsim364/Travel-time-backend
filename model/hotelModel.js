import mongoose from "mongoose";

const hotelSchema=new mongoose.Schema({
    hotelname:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:15
    },
    address:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:50
    },
    service:{
        type:Number,
        required:true,
        
        minlength:1,
        maxlength:1
    },
    phonenumber:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },

    email:{
        type:String,
        required:true,
       
        minlength:2,
    }
});

const Hotel=mongoose.model("Hotel",hotelSchema);
export default Hotel