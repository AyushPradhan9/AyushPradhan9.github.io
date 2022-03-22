import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import signature from "./img/signature.png";

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#060B1F" }} variant="dark" className="fixed-top top-0">
            <Container>
                <Navbar.Brand href="#Home">
                    <img
                        alt=""
                        src={signature}
                        width="240"
                        height="55"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="collapse responsive-navbar-nav">
                    <Nav className="ml-auto text-center">
                        <Nav.Link className="text-white h5" href="#About">About</Nav.Link>
                        <Nav.Link className="text-white h5" href="#Skills">Skills</Nav.Link>
                        <Nav.Link className="text-white h5" href="#Projects">Projects</Nav.Link>
                        <Nav.Link className="text-white h5" href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};