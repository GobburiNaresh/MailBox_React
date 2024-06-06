import React, { useState, useEffect } from "react";
import axios from "axios";
import "./mailList.css";
import { Form, Card, Container, Navbar } from "react-bootstrap";
import MailDetailsForm from "./MailDetailForm";
import { useSelector } from "react-redux";
import DeleteMail from "./DeleteMail"; // Ensure correct import

const MailList = () => {
  const [mails, setMails] = useState([]);
  const [showMailDetails, setShowMailDetails] = useState(false);
  const [selectedMail, setSelectedMail] = useState(null);
  const [checkedMails, setCheckedMails] = useState({});

  const userEmail = useSelector((state) => state.email.user_email);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await axios.get("http://localhost:4000/mail/getMail", {
          params: { userEmail },
        });
        setMails(response.data.data);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchMails();
  }, [userEmail]);

  const handleFormClick = async (mail) => {
    setSelectedMail(mail);
    setShowMailDetails(true);
    if (!mail.read) {
      try {
        const response = await axios.post(
          "http://localhost:4000/mail/markAsRead",
          {
            mailId: mail.id,
            readStatus: true,
          }
        );
        if (response.status === 200) {
          setMails((prevMails) =>
            prevMails.map((m) => (m.id === mail.id ? { ...m, read: true } : m))
          );
        }
      } catch (error) {
        console.error("Error marking email as read:", error);
      }
    }
  };

  const handleCheckboxChange = (mailId) => {
    setCheckedMails((prevCheckedMails) => ({
      ...prevCheckedMails,
      [mailId]: !prevCheckedMails[mailId],
    }));
  };

  const handleDeleteMail = (deleteId) => {
    setMails((prevMails) => prevMails.filter((mail) => mail.id !== deleteId));
  };

  return (
    <div className="mail">
      {showMailDetails && (
        <MailDetailsForm
          mail={selectedMail}
          onClose={() => setShowMailDetails(false)}
        />
      )}
      {!showMailDetails && (
        <Card className="around">
          <Form>
            <ul className="email-list">
              <Navbar bg="light" variant="black">
                <Container>
                  <Navbar.Brand>All Mails</Navbar.Brand>
                </Container>
              </Navbar>
              {mails.map((mail) => (
                <li key={mail.id}>
                  <Card className="individual_email">
                    <Form.Check
                      type="checkbox"
                      checked={!!checkedMails[mail.id]}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleCheckboxChange(mail.id);
                      }}
                      className="checkbox"
                    />
                    <div
                      className="email-content-left"
                      onClick={() => handleFormClick(mail)}
                    >
                      <span>{mail.userEmail}</span>
                      {!mail.read && <div className="blueDot"></div>}
                    </div>
                    <DeleteMail mailId={mail.id} onDelete={handleDeleteMail} />
                  </Card>
                </li>
              ))}
            </ul>
          </Form>
        </Card>
      )}
    </div>
  );
};

export default MailList;
