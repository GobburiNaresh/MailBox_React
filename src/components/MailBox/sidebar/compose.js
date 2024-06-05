import React, { useState, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Compose = ({ show, handleClose }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const recipientRef = useRef();
  const subjectRef = useRef();
  
  const userId = useSelector((state) => state.email.user_id);
  const userEmail = useSelector((state) => state.email.user_email);

  const composeMailHandler = async (event) => {
    event.preventDefault();

    const recipientEmailValue = recipientRef.current.value;
    const subjectValue = subjectRef.current.value;
    const messageValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    const composeEmail = {
      recipientEmail: recipientEmailValue,
      subject: subjectValue,
      message: messageValue,
    };

    try {
      const response = await axios.post('http://localhost:4000/mail/addMail', {composeEmail,userId,userEmail});
      if (response.status === 201) {
        recipientRef.current.value = '';
        subjectRef.current.value = '';
        setEditorState(EditorState.createEmpty());
        handleClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-bottom-right">
      <Modal.Header closeButton>
        <Modal.Title>New Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={composeMailHandler}>
          <Form.Group className="mb-3" controlId="formToEmail">
            <Form.Label>To:</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter recipient's email"
              ref={recipientRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter subject"
              ref={subjectRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message:</Form.Label>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Compose;
