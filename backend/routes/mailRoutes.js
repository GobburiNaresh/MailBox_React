import express from 'express';
import { addMail } from '../controllers/mailController.js';

const router = express.Router();

router.post('/addMail', addMail);

export default router;
