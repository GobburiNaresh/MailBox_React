import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaPencilAlt } from "react-icons/fa";
import { MdInbox } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { MdDrafts } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/Home" className="text-white text-decoration-none">Welcome to your mail box</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <div className="sidebar">
        <Nav defaultActiveKey="/inbox" className="flex-column">
          <Nav.Link as={Link} to="compose">
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
      </div>
    </div>
  );
};

export default Home;
