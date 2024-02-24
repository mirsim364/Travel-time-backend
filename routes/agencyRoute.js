import express, { Router } from 'express';
import { AgencyLog, Register, deleteAgency, getAgency, getAllAgency, updateAgency,findAllAgencies } from '../controller/agencyController.js';




const router=Router();

router.get('/register', Register);

router.post('/agencylog',AgencyLog);
router.get('/:id',getAgency);
router.get('/',getAllAgency);
router.delete('/:id',deleteAgency);
router.put('/:id',updateAgency);
router.get('/',findAllAgencies);

export default router