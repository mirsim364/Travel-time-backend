import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:15
    },
    message:{
        type:String,
        required:true,
        
        minlength:3,
        maxlength:1000
    
    },

    email:{
        type:String,
        required:true,
       
        minlength:2,
    }
});

const Message=mongoose.model("Message",messageSchema);
export default Message