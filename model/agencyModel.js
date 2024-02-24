import mongoose from "mongoose";

const agencySchema=new mongoose.Schema({
    agencyname:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:50
    },
    phonenumber:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
    },

    email:{
        type:String,
        required:true,
        minlength:2,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minlength:6
    },
    // username:{
    //     type:String,
    //     required:true,
        
    //     minlength:2,
    //     maxlength:50
    // }
});

const Agency=mongoose.model("Agency",agencySchema);
export default Agency