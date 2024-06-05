import React,{useState} from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";
import { MdInbox, MdDrafts } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import Compose from './Compose';
import './Menu.css';

const Menu = () => {
  const [showCompose, setShowCompose] = useState(false);
  const handleComposeClose = () => setShowCompose(false);
  const handleComposeShow = () => setShowCompose(true);
  return (
    <div>
      <Nav defaultActiveKey="/inbox" className="flex-column sidebar">
        <Nav.Link onClick={handleComposeShow}>
          <FaPencilAlt />
          <span className="nav-text">Compose</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/inbox">
          <MdInbox />
          <span className="nav-text">Inbox</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/sent">
          <IoMdSend />
          <span className="nav-text">Sent</span>
        </Nav.Link>
        <Nav.Link as={Link} to="/drafts">
          <MdDrafts />
          <span className="nav-text">Drafts</span>
        </Nav.Link>
      </Nav>

      <Compose show={showCompose} handleClose={handleComposeClose} />
    </div>
  );
}

export default Menu;
