import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import brandImage from "../../images/image_1.png";

const Header = () => {
  return (
    <>
      <Navbar bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={brandImage} alt="" />
          </Navbar.Brand>
          <Nav className="navLink ms-auto">
            <Nav.Link className="d-none d-md-block" href="#home">
              My Assignment
            </Nav.Link>{" "}
            <Nav.Link className="d-none d-md-block" href="#home">
              Chat with Mentor
            </Nav.Link>{" "}
            <div className="profile d-flex align-self-center">
              <i className="fa-solid fa-user"></i>
              <span>ProfileName</span>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
