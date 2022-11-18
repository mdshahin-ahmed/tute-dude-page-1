import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import brandImage from "../../images/image_1.png";

const Header = () => {
  return (
    <>
      <Navbar bg="white" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={brandImage} alt="" />
          </Navbar.Brand>
          <Nav className="navLink ms-auto">
            <Nav.Link className="menuLink d-none d-md-block" href="#home">
              My Assignment
            </Nav.Link>{" "}
            <Nav.Link className="menuLink d-none d-md-block" href="#home">
              Chat with Mentor
            </Nav.Link>{" "}
            <div className="profile d-flex">
              <div className="userLogoWrap d-none d-md-flex">
                <i className="fa-solid fa-user"></i>
              </div>
              <span>ProfileName</span>
              <i className="profileArrow fa-solid fa-angle-down"></i>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
