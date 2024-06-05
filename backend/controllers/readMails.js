import Email from '../models/addEmail.js';

export const readMails = async (req, res) => {
    console.log('Received request to update read status:', req.body);
    const { mailId, readStatus } = req.body;

    if (!mailId) {
        return res.status(400).json({ message: 'Mail ID is required' });
    }

    try {
        const mail = await Email.findByPk(mailId);
        console.log('Email fetched:', mail);

        if (!mail) {
            return res.status(404).json({ message: 'Mail not found' });
        }

        mail.read = readStatus;
        await mail.save();

        res.status(200).json({ message: 'Mail read status updated', mail });
    } catch (error) {
        console.error('Error updating mail read status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
