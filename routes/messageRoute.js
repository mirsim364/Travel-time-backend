import express, { Router } from 'express';
import {MessageLog, getAllMessage, getMessage, deleteMessage } from '../controller/messageController.js';




const router=Router();


router.post('/messagelog',MessageLog);
router.get('/:id',getMessage);
router.get('/',getAllMessage);
router.delete('/:id',deleteMessage);

export default router