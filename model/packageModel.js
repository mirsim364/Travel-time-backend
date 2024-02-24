import mongoose from "mongoose";

const packageSchema=new mongoose.Schema({
    packagename:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:15
    },
    place:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:15
    },
    numberofday:{
        type:Number,
        required:true,
        minlength:1,
    },
    numberofperson:{
        type:Number,
        required:true,
        minlength:1,
    },
    price:{
        type:Number,
        required:true,
        minlength:3,
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

const Package=mongoose.model("Package",packageSchema);
export default Package
        


