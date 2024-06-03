import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Navbar className="bg-body-primary">
      <Container>
        <Navbar.Brand>
          <Link to="/Home">Welcome to your mail box</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as:</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Home;
