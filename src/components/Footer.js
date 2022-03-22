import React from "react";
import ayush from "./img/logo.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <section id="Footer">
            <Container className="main-cont text-white">
                <Row>
                    <Col md={6} sm={12}>
                        <Row className="m-auto text-center ">
                            <Col md={4} xs={4} className="pb-2">
                                <img src={ayush} className="footImg" />
                            </Col>
                            <Col md={8} xs={8} className="pb-2">
                                <h3 className="header pt-3 float-left">Ayush Pradhan</h3>
                            </Col>
                            <Col>
                                <a className="text-white-50 text-decoration-none" href="https://www.freepik.com/photos/cinematic-background" target="_blank">
                                    Cinematic background photo created by rawpixel.com - www.freepik.com</a>
                                <p className="text-white-50 text-center">Made with ❤️ by Ayush Pradhan.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1} sm={0}>
                        <div className="vr h-100 d-none d-sm-none d-md-block"></div>
                        <hr className="w-100 d-block d-sm-block d-md-none"></hr>
                    </Col>
                    <Col md={5} sm={12} className="text-center">
                        <h4 className="header">Important Links</h4>
                        <a className="text-white-50 text-decoration-none" href="#About">About</a>
                        <br />
                        <a className="text-white-50 text-decoration-none" href="#Skills">Skills</a>
                        <br />
                        <a className="text-white-50 text-decoration-none" href="#Projects">Projects</a>
                        <br />
                        <a className="text-white-50 text-decoration-none" href="#Contact">Contact</a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}