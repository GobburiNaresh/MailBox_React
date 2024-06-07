import React from 'react';
import { CloseButton, Card } from 'react-bootstrap';
import DOMPurify from 'dompurify';


const MailDetailsForm = ({ mail, onClose }) => {
    const sanitizedMessage = DOMPurify.sanitize(mail.message);
    let user, userLable;
    if(mail.userEmail){
        user = mail.userEmail;
        userLable = 'From';
    }
    else{
        user = mail.recipientEmail;
        userLable = 'To'
    }

    return (
        <Card className="mail-details" style={{ position: 'relative', padding: '20px' }}>
            <h2>{mail.subject}</h2>
            <Card className="mb-3 p-1">
                <h3>Details:</h3>
                <p><strong>{userLable}:</strong> {user}</p>
                <p><strong>Time: </strong>{mail.createdAt}</p>
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
