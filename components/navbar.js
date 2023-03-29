import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import React from "react";

function BrandExample() {
  const { user } = useUser();
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
      <Container>
        <NavLink href="/" passhref="true" className="text-decoration-none">
          <Navbar.Brand>MyWebClass</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          onClick={() => setIsExpanded(!isExpanded)}
          aria-controls="navbarResponsive"
        />
        <Navbar.Collapse
          id="navbarResponsive"
          className={isExpanded ? "show" : ""}
        >
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link>About</Nav.Link>

            <Nav.Link>Services</Nav.Link>

            <Nav.Item>
              {!user ? (
                <Nav.Link
                  href="/api/auth/login"
                  passhref="true"
                  className="text-decoration-none"
                >
                  Sign in
                </Nav.Link>
              ) : (
                <Nav.Link
                  href="/api/auth/logout"
                  passhref="true"
                  className="text-decoration-none"
                >
                  Sign out
                </Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BrandExample;
