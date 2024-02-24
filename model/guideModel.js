import mongoose from "mongoose";

const guideSchema=new mongoose.Schema({
    guidename:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:25
    },
    place:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:100
    },
    language:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:50
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

const Guide=mongoose.model("Guide",guideSchema);
export default Guide