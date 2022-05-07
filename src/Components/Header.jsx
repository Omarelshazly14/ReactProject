import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

export default function Header() {
  let navigate = useNavigate();

  let goToForm = () => {
    navigate("/home/form");
  };
  return (
    <>
      <Navbar
        variant="dark"
        className="mb-1"
        style={{ backgroundColor: "#001021" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.un.org/sites/un2.un.org/files/twitter-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Social Media App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/home"
                className="btn mx-2"
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : { color: "#878a85" }
                }
              >
                Home
              </NavLink>
              <NavLink
                className="btn mx-2"
                to="/about"
                style={({ isActive }) =>
                  isActive ? { color: "#fff" } : { color: "#878a85" }
                }
              >
                About
              </NavLink>
              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                className="mx-2"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <button
                className="btn btn-outline-info text-white"
                onClick={goToForm}
              >
                Sign Up
              </button>
              {/* <a href="#login" oncl>Sign up</a> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
