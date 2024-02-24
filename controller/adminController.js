import Admin from "../model/adminModel.js"


//function of user registeration
export const AdminRegister=(req,res)=>{
    try{
        const {username,password,email}=req.body

        if(!username||!password||!email){
            return res.status(400).json({message :"All fields are mandatory"})
        }
        const newAdmin=new Admin({username,password,email})
        const savedAdmin =newAdmin.save()
        return res.status(201).json({message:"succesfully inserted"})
    }catch(error){
        return res.status(404).json({message :error.message || 'error'});
    }
}


//function of user login
export const Login =async (req,res)=>{
    try{
        const{username,password}=req.body;
        if (!username || !password){
            return res.status(400).json({message:"All fields are mandatory"})

        }const login =await Admin.findOne({username:username,password:password})
        return res.status(201).json({message:"successfully inserted"})

    }catch(error){
        return res.status(404).json({message:error.message||'error'})
    }
}

//function of fetching  one user details
export const getAdmin=async (req,res)=>{
    try{
        const{id}=req.params;
        const getAdmin=await Admin.findById(id)

        if(!getAdmin){
            return res.status(400).json({message:"admin not found"})
        }

        return res.status(200).json({data:getAdmin,message:"invalid password"})
    }catch(error){
        return res.status(400).json({message:error.message ||'error'})
    }
}

//function of fetching all user details
export const getAllAdmin=async (req,res)=>{
    try{
        const getAllAdmin=await Admin.find()

        if(!getAllAdmin.length>0){
            return res.status(400).json({message:"collection is not found!"})
        }
        return res.status(200).json({data:getAllAdmin,message:"users"})
    }catch(error){
        return res.status(400).json({message:error.message || 'error'})

    }
}
//function of editing user
export const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAdminData = req.body; // Updated data from request body
        console.log('sdsddd');
        console.log(req.body,id);
        // Find the agency by ID and update it
        const updatedAdmin = await Admin.findByIdAndUpdate(id, {$set:updatedAdminData}, { new: true });
        console.log(updateAdmin,'dd');
        res.status(200).json({data:updatedAdmin}); // Send back the updated agency
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//function deleting user
export const deleteUser=async (req,res)=>{
    
        try{
            const deleteUser=await Admin.findByIdAndDelete(req.params.id);
            if(!deleteUser){
                return res.status(404).json({message:'User not found'});
            }
             res.json({message:"User deleted successfully"});
        }catch(error){
            console.log(error);
             res.status(500).json({message:'server error'})
        }
    }

        