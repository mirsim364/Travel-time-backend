import express, { Router } from "express";
import {AdminRegister, Login,deleteUser,getAdmin,getAllAdmin, updateAdmin } from "../controller/adminController.js";
import { verifyAdminToken } from "../middleware/tokenVerifying.js";


const router = Router()

router.post('/register', AdminRegister);
router.post('/login', Login);
router.get('/:id', getAdmin);
router.get('/',getAllAdmin);
router.delete('/:id',deleteUser)
router.put('/:id',updateAdmin);
export default router;