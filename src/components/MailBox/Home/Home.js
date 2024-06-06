import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logout from './Logout';
import { userAction } from '../../../Redux/UserSlice';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userEmail = useSelector((state) => state.email.user_email);
  const userName = userEmail.split('@')[0];

  const logoutHandler = () => {
    dispatch(userAction.logout());
    history.replace('/');
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/inbox" className="text-white text-decoration-none">ConnectMail</Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <div className="text-white d-flex align-items-center" style={{ textDecoration: 'none' }}>
                <FaUserCircle size={24} className="me-2" />
                <span>{userName}</span>
              </div>
              <div className="text-white d-flex align-items-center mx-3" style={{ textDecoration: 'none' }}>
                <Logout onClick={logoutHandler} />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;
