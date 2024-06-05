import React from 'react';
import { CloseButton, Card } from 'react-bootstrap';
import DOMPurify from 'dompurify';


const MailDetailsForm = ({ mail, onClose }) => {
    const sanitizedMessage = DOMPurify.sanitize(mail.message);

    return (
        <Card className="mail-details" style={{ position: 'relative', padding: '20px' }}>
            <h2>{mail.subject}</h2>
            <Card className="mb-3 p-1">
                <h3>Details:</h3>
                <p>From: {mail.userEmail}</p>
                <p>Time: {mail.createdAt}</p>
            </Card>
            <Card className="mb-3 p-1">
                <h3>Message:</h3>
                <div dangerouslySetInnerHTML={{ __html: sanitizedMessage }} />
            </Card>
            <CloseButton onClick={onClose} style={{ position: 'absolute', top: 15, right: 15 }} />
        </Card>
    );
};

export default MailDetailsForm;
