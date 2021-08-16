import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
           <Navbar bg="light"expand="lg">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
     
      <Nav.Link ><Link to="/" style={{textDecoration:"none"}}>Home</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar> 
        </div>
    )
}

export default Header;

