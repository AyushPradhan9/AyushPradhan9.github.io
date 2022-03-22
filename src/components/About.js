import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';
import img from "./img/me.jpg"

export default function About() {
    return (
        <section id="About">
            <Container className="main-cont">
                <Row>
                    <Col lg={6} sm={12}>
                    </Col>
                    <Col lg={6} sm={12} className="text-center">
                        <h1 className="header abtHeader font-weight-bold mt-5">About</h1>
                        <hr className="abtLine underline" />
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className="m-auto text-center gradient-border">
                                <img src={img} className="abtimg" alt="Ayush Pradhan" title="Hey! 👋" />
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <h5 className="text-center text-lg-start mt-4">
                                Hey, It's me! I am a BTech student in Computer Science from Vellore Institute of Technology, Bhopal.
                            </h5>
                            <h5 className="text-center text-lg-start mb-4">
                                I like building productive and helpful softwares for people. I've have designed and built management, chatting and utility softwares as well as some interesting websites!
                            </h5>
                            <Container className="text-center m-auto">
                                <Row className="justify-content-evenly">
                                    <Col md sm={12}>
                                        <a
                                            href="https://www.linktr.ee/ayushpradhan/"
                                            target="_blank" rel="noreferrer"
                                            className="btn btn-outline-dark">
                                            LinkTree{' '}
                                            <FontAwesomeIcon icon={faTree} color="black" />
                                        </a>
                                    </Col>

                                    <Col md sm={12}>
                                        <a
                                            href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fayushpradhan9"
                                            target="_blank" rel="noreferrer"
                                            className="btn btn-outline-dark">
                                            Follow me{' '}
                                            <FontAwesomeIcon icon={faGithub} color="black" />
                                        </a>
                                    </Col>
                                </Row>

                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}