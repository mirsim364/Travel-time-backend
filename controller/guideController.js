
import Guide from "../model/guideModel.js";


export const GuideLog =async(req,res)=>{


    try{
        const{guidename,phonenumber,email,place,language}=req.body

        if(!guidename|| !phonenumber|| !email||!place||!language){
            return res.status(400).json({message:"All fields are mandatory"})
        }
        const newGuide=new Guide(req.body)
        const savedGuide= await newGuide.save()
console.log(savedGuide);
        return res.status(201).json({message:"successfully inserted"})
    }catch(error){
        return res.status(404).json({message:error.message ||'error'})
    }
}



export const getGuide=async (req,res)=>{

    try{
        const{id}=req.params;
        console.log(id,'guide id');

        const getGuide=await Guide.findById(id)

        if(!getGuide){
            return res.status(400).json({message:"guide is not found!"})
        }

        return res.status(200).json({users:getGuide,message:'invalid email'})
    }catch(error){
        return res.status(400).json({message:error.message ||'error'})
    }
}


export const getAllGuide=async (req,res)=>{
    try{
        const getAllGuide=await Guide.find()
        if(!getGuide.length>0){
            return res.status(400).json({message:"collection is not found!"})
        }

        return res.status(200).json({data:getAllGuide,message:'successsful'})
    }catch(error){
        return res.status(400).json({message:error.message ||'invalid email or password'})
    }
    }

    export const deleteGuide=async (req,res)=>{
    
        try{
            const deleteGuide=await Guide.findByIdAndDelete(req.params.id);
            if(!deleteGuide){
                return res.status(404).json({message:'Guide not found'});
            }
             res.json({message:"Guide deleted successfully"});
        }catch(error){
            console.log(error);
             res.status(500).json({message:'server error'})
        }
    }


    export const updateGuide = async (req, res) => {
        try {
            const { id } = req.params;
            const updatedGuideData = req.body; // Updated data from request body
    console.log('sdsddd')
    console.log(req.body,id)
            // Find the agency by ID and update it
            const updatedGuide = await Guide.findByIdAndUpdate(id,{$set:updatedGuideData}, { new: true });
            console.log(updateGuide,'dd')
            res.status(200).json({data:updatedGuide}); // Send back the updated agency
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    export const findAllGuides =  async (req, res) => {
        try {
            const guides = await Guide.find();
            res.json(guides);
        } catch (error) {
            console.error('Error finding guides:', error);
            res.status(500).send('Server error');
        }
    };