import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Compose = ({ show, handleClose }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-bottom-right">
      <Modal.Header closeButton>
        <Modal.Title>New Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formToEmail">
            <Form.Label>To:</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter recipient's email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter subject"
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Compose;
