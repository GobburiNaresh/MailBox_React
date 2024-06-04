import express from 'express';
import { addMail,getMails } from '../controllers/mailController.js';

const router = express.Router();

router.post('/addMail', addMail);
router.get('/getMail', getMails)

export default router;
