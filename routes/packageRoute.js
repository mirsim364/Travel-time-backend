import express, { Router } from 'express';
import { PackageLog, getPackage, getAllPackage, deletePackage, updatePackage,findAllPackages } from '../controller/packageController.js';




const router=Router();
router.post('/packagelog',PackageLog);
router.get('/:id',getPackage);
router.get('/',getAllPackage);
router.delete('/:id',deletePackage);
router.put('/:id',updatePackage);
router.get('/',findAllPackages);

export default router
                                