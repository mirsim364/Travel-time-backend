import Message from "../model/messageModel.js";


export const MessageLog =async(req,res)=>{


    try{
        const{name,email,message}=req.body

        if(!name|| !email ||!message){
            return res.status(400).json({message:"All fields are mandatory"})
        }
        const newMessage=new Message(req.body)
        const savedMessage= await newMessage.save()
console.log(savedMessage);
        return res.status(201).json({message:"successfully inserted"})
    }catch(error){
        return res.status(404).json({message:error.message ||'error'})
    }
}



export const getMessage=async (req,res)=>{
    try{
        const{id}=req.params;
        console.log(id,'message id');

        const getMessage=await Message.findById(id)

        if(!getMessage){
            return res.status(400).json({message:"message is not found!"})
        }

        return res.status(200).json({users:getMessage,message:'invalid email'})
    }catch(error){
        return res.status(400).json({message:error.message ||'error'})
    }
}


export const getAllMessage=async (req,res)=>{
    try{
        const getAllMessage=await Message.find()
        if(!getMessage.length>0){
            return res.status(400).json({message:"collection is not found!"})
        }

        return res.status(200).json({data:getAllMessage,message:'successsful'})
    }catch(error){
        return res.status(400).json({message:error.message ||'invalid email'})
    }
    }


    export const deleteMessage=async (req,res)=>{
    
        try{
            const deleteMessage=await Message.findByIdAndDelete(req.params.id);
            if(!deleteMessage){
                return res.status(404).json({message:'Messagenot found'});
            }
             res.json({message:"Message deleted successfully"});
        }catch(error){
            console.log(error);
             res.status(500).json({message:'server error'})
        }
    }