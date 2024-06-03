import addEmail from '../models/addEmail.js';

export const addMail = async (req, res) => {
    console.log(req.body);
    const { recipientEmail, subject, message } = req.body;

    if (!recipientEmail || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newEmail = await addEmail.create({
            recipientEmail,
            subject,
            message,
        });

        res.status(201).json(newEmail);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'Recipient email must be unique' });
        }
        console.error('Error creating email:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
