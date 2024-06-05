import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';
import { useSelector } from 'react-redux';


const Home = () => {
  const userEmail = useSelector((state) => state.email.user_email);
  const userName = userEmail.split('@')[0];
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/inbox" className="text-white text-decoration-none">ConnectMail</Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#" className="text-white d-flex align-items-center">
                <FaUserCircle size={24} className="me-2" />
                <span>{userName}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
