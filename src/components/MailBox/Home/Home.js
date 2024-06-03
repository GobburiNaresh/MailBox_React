import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import Sidebar from '../sidebar/Sidebar';


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
      <Sidebar/>
    </div>
  );
};

export default Home;
