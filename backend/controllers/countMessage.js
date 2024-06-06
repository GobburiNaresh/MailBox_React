import Email from '../models/addEmail.js';

export const countUnreadMessages = async (req, res) => {
  try {
    const userEmail = req.query.userEmail;
    const countUnread = await Email.count({
      where: {
        recipientEmail: userEmail,
        read: false
      }
    });
    res.status(200).json({ message: 'Unread count received successfully', count: countUnread });
  } catch (error) {
    console.error('Error retrieving unread emails:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
