import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mailList.css';
import { Form, Card } from 'react-bootstrap';
import MailDetailsForm from './MailDetailForm';

const MailList = () => {
    const [mails, setMails] = useState([]);
    const [showMailDetails, setShowMailDetails] = useState(false);
    const [selectedMail, setSelectedMail] = useState(null);

    useEffect(() => {
        const fetchMails = async () => {
            try {
                const response = await axios.get('http://localhost:4000/compose/getMail');
                setMails(response.data.data);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };

        fetchMails();
    }, []);

    const handleFormClick = (mail) => {
        setSelectedMail(mail);
        setShowMailDetails(true);
    };

    return (
        <div className='mail'>
            {showMailDetails && <MailDetailsForm mail={selectedMail} onClose={() => setShowMailDetails(false)} />}
            {!showMailDetails && 
            <Form>
                <ul className='email-list'>
                    {mails.map(mail => (
                        <li key={mail.id} onClick={() => handleFormClick(mail)}>
                            <Card className='individual_email'>
                                <Form.Check
                                    type="checkbox"
                                    label={mail.recipientEmail}
                                    className='checkbox'
                                />
                            </Card>
                        </li>
                    ))}
                </ul>
            </Form>
        }
        </div>
    );
}

export default MailList;
