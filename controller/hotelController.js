import Hotel from "../model/hotelModel.js";


export const HotelLog =async(req,res)=>{


    try{
        const{hotelname,phonenumber,email,address,service}=req.body

        if(!hotelname|| !phonenumber|| !email||!address||!service){
            return res.status(400).json({message:"All fields are mandatory"})
        }
        const newHotel=new Hotel({hotelname,phonenumber,email,address,service})
        const savedHotel= await newHotel.save()
console.log(savedHotel);
        return res.status(201).json({message:"successfully inserted"})
    }catch(error){
        return res.status(404).json({message:error.message ||'error'})
    }
}



export const getHotel=async (req,res)=>{

    try{
        const{id}=req.params;
        console.log(id,'hotel id');

        const getHotel=await Hotel.findById(id)

        if(!getHotel){
            return res.status(400).json({message:"hotel is not found!"})
        }

        return res.status(200).json({users:getHotel,message:'invalid email'})
    }catch(error){
        return res.status(400).json({message:error.message ||'error'})
    }
}


export const getAllHotel=async (req,res)=>{
    try{
        const getAllHotel=await Hotel.find()
        if(!getHotel.length>0){
            return res.status(400).json({message:"collection is not found!"})
        }

        return res.status(200).json({data:getAllHotel,message:'successsful'})
    }catch(error){
        return res.status(400).json({message:error.message ||'invalid email or password'})
    }
    }

    export const deleteHotel=async (req,res)=>{
    
        try{
            const deleteHotel=await Hotel.findByIdAndDelete(req.params.id);
            if(!deleteHotel){
                return res.status(404).json({message:'Hotel not found'});
            }
             res.json({message:"Hotel deleted successfully"});
        }catch(error){
            console.log(error);
             res.status(500).json({message:'server error'})
        }
    }


    export const updateHotel = async (req, res) => {
        try {
            const { id } = req.params;
            const updatedHotelData = req.body; // Updated data from request body
    console.log('sdsddd');
            console.log(req.body,id);
            // Find the agency by ID and update it
            const updatedHotel = await Hotel.findByIdAndUpdate(id,{$set:updatedHotelData}, { new: true });
    console.log(updateHotel,'dd');
            res.status(200).json({data:updatedHotel}); // Send back the updated agency
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


    export const findAllHotels =  async (req, res) => {
        try {
            const hotels = await Hotel.find();
            res.json(hotels);
        } catch (error) {
            console.error('Error finding hotels:', error);
            res.status(500).send('Server error');
        }
    };