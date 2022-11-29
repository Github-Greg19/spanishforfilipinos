import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Container from 'react-bootstrap/Container';

export function Header() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/videos">Videos</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   
  );
}
