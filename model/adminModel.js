import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        minlength:2,
        unique:true,
        maxlength:20
    },
    email: {
        type: String,
        required: true,
        minlength:2
    },
    password: {
        type: String,
        required:true,
        minlength:2,
        maxlength:10,
        unique:true
    }
});

export const Admin = mongoose.model("Admin", adminSchema);
export  default Admin