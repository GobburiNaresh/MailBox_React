import Email from '../models/addEmail.js';

export const sentMails = async (req, res) => {
    const userId = req.query.userId;
    
    try {
        const allMails = await Email.findAll({
            where: { userId }
        });

        const formattedMails = allMails.map((email) => ({
            id: email.id,
            recipientEmail: email.recipientEmail,
            subject: email.subject,
            message: email.message,
            userId: email.userId,
            createdAt: email.createdAt
        }));

        console.log(formattedMails);
        res.status(200).json({ message: 'Details received successfully', data: formattedMails });
    } catch (error) {
        console.error('Error retrieving emails:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
