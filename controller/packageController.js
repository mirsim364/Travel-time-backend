import Package from "../model/packageModel.js";


export const PackageLog =async(req,res)=>{


    try{
        const{packagename,place,numberofday,numberofperson,price,phonenumber,email}=req.body

        if(!packagename ||!place ||!numberofday ||!numberofperson||!price|| !phonenumber|| !email){
            return res.status(400).json({message:"All fields are mandatory"})
        }
        const newPackage=new Package(req.body)
        const savedPackage=await newPackage.save()
console.log(savedPackage);
        return res.status(201).json({message:"successfully inserted"})
    }catch(error){
        return res.status(404).json({message:error.message ||'error'})
    }
}



export const getPackage=async (req,res)=>{
    try{
        const{id}=req.params;
        console.log(id,'package id');

        const getPackage=await Package.findById(id)

        if(!getPackage){
            return res.status(400).json({message:"package is not found!"})
        }

        return res.status(200).json({users:getPackage,message:'invalid email'})
    }catch(error){
        return res.status(400).json({message:error.message ||'error'})
    }
}


export const getAllPackage=async (req,res)=>{
    try{
        const getAllPackage=await Package.find()
        if(!getPackage.length>0){
            return res.status(400).json({message:"collection is not found!"})
        }


        return res.status(200).json({data:getAllPackage,message:'successsful'})
    }catch(error){
        return res.status(400).json({message:error.message ||'invalid email or password'})
    }
    }


    export const deletePackage=async (req,res)=>{
    
        try{
            const deletePackage=await Package.findByIdAndDelete(req.params.id);
            if(!deletePackage){
                return res.status(404).json({message:'Package not found'});
            }
             res.json({message:"Package deleted successfully"});
        }catch(error){
            console.log(error);
             res.status(500).json({message:'server error'})
        }
    }

                                  
    export const updatePackage = async (req, res) => {
        try {
            const { id } = req.params;
            const updatedPackageData = req.body; // Updated data from request body
            console.log('sdsddd');
            console.log(req.body,id);
            // Find the agency by ID and update it
            const updatedPackage = await Package.findByIdAndUpdate(id, {$set:updatedPackageData}, { new: true });
           console.log(updatePackage,'dd');
            res.status(200).json({data:updatedPackage}); // Send back the updated agency
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


   export const findAllPackages =  async (req, res) => {
            try {
                const packages = await Package.find();
                res.json(packages);
            } catch (error) {
                console.error('Error finding packages:', error);
                res.status(500).send('Server error');
            }
        };
    