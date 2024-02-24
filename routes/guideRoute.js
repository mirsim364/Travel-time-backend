import express, { Router } from 'express';
import { GuideLog, getGuide, getAllGuide, deleteGuide, updateGuide, findAllGuides } from '../controller/guideController.js';




const router=Router();
router.post('/guidelog',GuideLog);
router.get('/:id',getGuide);
router.get('/',getAllGuide);
router.delete('/:id',deleteGuide);
router.put('/:id',updateGuide);
router.get('/',findAllGuides);

export default router