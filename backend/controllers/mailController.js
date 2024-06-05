import Email from '../models/addEmail.js';
import User from '../models/user.js';

export const addMail = async (req, res) => {
  const { recipientEmail, subject, message} = req.body.composeEmail;
  const userId = req.body.userId;
  const userEmail = req.body.userEmail;
  if (!recipientEmail || !subject || !message || !userId || !userEmail) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const newEmail = await Email.create({
      recipientEmail,
      subject,
      message,
      userId,
      userEmail
    });

    res.status(201).json(newEmail);
  } catch (error) {
    console.error('Error creating email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getMails = async (req, res) => {
  
  const userEmail = req.query.userEmail;
  try {
    const allMails = await Email.findAll({where: {recipientEmail: userEmail}});
    const formattedMails = allMails.map((email) => ({
      id: email.id,
      recipientEmail: email.recipientEmail,
      subject: email.subject,
      message: email.message,
      userId: email.userId,
      userEmail: email.userEmail,
      read: email.read,
      createdAt: email.createdAt,
    }));
    res.status(200).json({ message: 'Details received successful', data: formattedMails });
  } catch (error) {
    console.error('Error retrieving emails:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
