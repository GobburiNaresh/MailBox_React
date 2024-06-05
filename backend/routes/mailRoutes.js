import express from 'express';
import { addMail,getMails } from '../controllers/mailController.js';
import {sentMails} from '../controllers/sendedMail.js';
import {readMails} from '../controllers/readMails.js';

const router = express.Router();

router.post('/addMail', addMail);
router.get('/getMail', getMails);
router.get('/sentMail', sentMails);
router.post('/markAsRead',readMails);

export default router;
