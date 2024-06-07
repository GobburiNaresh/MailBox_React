import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mailList.css';
import { Form, Card, Container, Navbar } from 'react-bootstrap';
import MailDetailsForm from './MailDetailForm';
import { useSelector } from 'react-redux';
import DeleteMail from './DeleteMail';

const MailList = () => {
    const [mails, setMails] = useState([]);
    const [showMailDetails, setShowMailDetails] = useState(false);
    const [selectedMail, setSelectedMail] = useState(null);

    const userId = useSelector((state) => state.email.user_id);
    
    useEffect(() => {
        const fetchMails = async () => {
            try {
                const response = await axios.get('http://localhost:4000/mail/sentMail', {
                    params: { userId } 
                });
                console.log(response.data.data);
                setMails(response.data.data);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };

        fetchMails();
    }, [userId]);

    const handleFormClick = (mail) => {
        setSelectedMail(mail);
        setShowMailDetails(true);
    };
    const handleDeleteMail = (deleteId) => {
        setMails((prevMails) => prevMails.filter(mail => mail.id !== deleteId));
    };

    return (
        <div className='mail'>
            {showMailDetails && <MailDetailsForm mail={selectedMail} onClose={() => setShowMailDetails(false)} />}
            {!showMailDetails && 
            <Form>
                <ul className='email-list'>
                <Navbar bg="light" variant="black">
                    <Container>
                    <Navbar.Brand>All Mails</Navbar.Brand>
                    </Container>
                </Navbar>
                    {mails.map(mail => (
                        <li key={mail.id} onClick={() => handleFormClick(mail)}>
                            <Card className='individual_email'>
                                <Form.Check
                                    type="checkbox"
                                    label={mail.recipientEmail}
                                    className='checkbox'
                                />
                                 <DeleteMail mailId={mail.id} onDelete={handleDeleteMail} />
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
