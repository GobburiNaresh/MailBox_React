import React from 'react';
import { CloseButton,Card } from 'react-bootstrap';

const MailDetailsForm = ({ mail, onClose }) => {
    return (
        <Card className="mail-details">
            <h2>{mail.subject}</h2>
            <p>Sender: {mail.senderEmail}</p>
            <p>Recipient: {mail.recipientEmail}</p>
            <p>{mail.message}</p>
            <CloseButton onClick={onClose} style={{ position: 'absolute', top: 15, right: 15 }} />
        </Card>
    );
};

export default MailDetailsForm;
