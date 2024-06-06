import express from 'express';
import { addMail,getMails } from '../controllers/mailController.js';
import {sentMails} from '../controllers/sendedMail.js';
import {readMails} from '../controllers/readMails.js';
import {countUnreadMessages} from '../controllers/countMessage.js';

const router = express.Router();

router.post('/addMail', addMail);
router.get('/getMail', getMails);
router.get('/sentMail', sentMails);
router.post('/markAsRead',readMails);
router.get('/countUnRead',countUnreadMessages);

export default router;
