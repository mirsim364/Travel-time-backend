import Agency from "../model/agencyModel.js";


export const Register=(req,res)=>{
    try{
        const {username,password,email}=req.body

        if(!username||!password||!email){
            return res.status(400).json({message :"All fields are mandatory"})
        }
        const newAgency=new Agency({username,password,email})
        const savedAgency =newAgency.save()
        console.log(savedAgency);
        return res.status(201).json({message:"succesfully inserted"})
    }catch(error){
        return res.status(404).json({message :error.message || 'error'});
    }
}


//function of agency adding form in admin
export const AgencyLog =async(req,res)=>{


    try{
        const{agencyname,phonenumber,email,password}=req.body

        if(!agencyname|| !phonenumber|| !email ||!password){
            return res.status(400).json({message:"All fields are mandatory"})
        }
        const newAgency=new Agency(req.body)
        const savedAgency= await newAgency.save()
console.log(savedAgency);
        return res.status(201).json({message:"successfully inserted"})
    }catch(error){
        return res.status(404).json({message:error.message ||'error'})
    }
}


//function of single agency view
export const getAgency=async (req,res)=>{
    try{
        const{id}=req.params;
        console.log(id,'agency id');

        const getAgency=await Agency.findById(id)

        if(!getAgency){
            return res.status(400).json({message:"agency is not found!"})
        }

        return res.status(200).json({users:getAgency,message:'invalid email'})
    }catch(error){
        return res.status(400).json({message:error.message ||'error'})
    }
}

//function of all agency view
export const getAllAgency=async (req,res)=>{
    try{
        const getAllAgency=await Agency.find()
        if(!getAgency.length>0){
            return res.status(400).json({message:"collection is not found!"})
        }

        return res.status(200).json({data:getAllAgency,message:'successsful'})
    }catch(error){
        return res.status(400).json({message:error.message ||'invalid email or password'})
    }
    }



//function of delete agency
export const deleteAgency=async (req,res)=>{
    
    try{
        const deleteAgency=await Agency.findByIdAndDelete(req.params.id);
        if(!deleteAgency){
            return res.status(404).json({message:'Agency not found'});
        }
         res.json({message:"Agency deleted successfully"});
    }catch(error){
        console.log(error);
         res.status(500).json({message:'server error'})
    }
}

// function of editing agency
export const updateAgency = async (req, res) => {
    try {
       const { id } = req.params;
        const updatedAgencyData = req.body; // Updated data from request body

        // Find the agency by ID and update it
        const updatedAgency = await Agency.findByIdAndUpdate(id, {$set:updatedAgencyData}, { new: true });

        res.status(200).json({data:updatedAgency}); // Send back the updated agency
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// function of showing agency in user package
export const findAllAgencies =  async (req, res) => {
    try {
        const agencies = await Agency.find();
        res.json(agencies);
    } catch (error) {
        console.error('Error finding agencies:', error);
        res.status(500).send('Server error');
    }
};