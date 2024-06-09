// import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
// import { IoIosArrowDropdown } from "react-icons/io";


// const Navbar = () => {


//   return (
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <img src={logo} alt="logo" />
//           <p className="companyName">DSB</p>
//         </div>
//         <ul className="navbar-menu">
//           <li><a href="/">HOME</a></li>
//           <li><a href="/">SERVICES<IoIosArrowDropdown className="dropdownIcon" /></a> </li>
//           <li><a href="/">INSIGHTS</a></li>
//           <li><a href="/">EVENTS & WEBINARS</a> </li>
//           <li><a href="/">LEARNING HUB<IoIosArrowDropdown className="dropdownIcon" /></a> </li>
//           <li><a href="/">ABOUT US<IoIosArrowDropdown className="dropdownIcon" /></a> </li>
//           <li><a href="/">CONTACT US</a></li>
//         </ul>
//       </div>

//   );
// };

// export default Navbar;
// src/components/NavbarStyle.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarStyle() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <img  className='navbarLogo' src={logo} alt="logo" />
        <Navbar.Brand className='companyName' href="#home">DSB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">INSIGHTS</Nav.Link>
            <Nav.Link href="#link">EVENTS & WEBINARS</Nav.Link>
            <NavDropdown title="LEARNING HUB" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="LEARNING HUB" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarStyle;
