import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar(){
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container >
        <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png"
              width="30"
              height="30"
              className="d-inline-block align-top fix"
              alt="React Bootstrap logo"
            />
          <Navbar.Brand href="/">Netflix-Clone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="favlist">Favorite Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}