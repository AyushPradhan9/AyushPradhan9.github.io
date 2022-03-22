import React from "react";
import FadeIn from 'react-fade-in';
import { Container, Row } from 'react-bootstrap';
import { MDBMask } from "mdbreact";
import background from './img/background.jpg';
import Particles from "react-tsparticles";
import "./style.css";

export default function Intro() {
    const options = {
        fullScreen: {
            enable: false,
            zIndex: 1,
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 100,
                limit: 200,
                density: {
                    enable: true,
                    value_area: 2000
                }
            },
            color: {
                value: "#ADD8E6"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ADD8E6",
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        detectRetina: true,
    };

    return (
        <section id="Home">
            <Container fluid className="view p-0">
                <Particles
                    options={options}
                    className="tparticle" />

                <img src={background} className="videoFluid" alt="BackGround" />
                <MDBMask pattern={5} className="d-flex position-absolute justify-content-center align-items-center">
                    <Container className="px-md-3 px-sm-0">
                        <Row>
                            <div className="zIndex2 mb-4 white-text text-center">
                                <FadeIn transitionDuration={3000}>
                                    <h1 className="nameHeader display-1">Ayush Pradhan</h1>
                                    <hr className="hr-light m-auto w-50" />
                                    <h4 className="fst-italic mt-4 mb-4 ml-2 mr-2">A computer science student curious about technology.</h4>
                                    <a href="#Projects" rel="noreferrer" className="btn btn-rounded btn-outline-white">
                                        My Work
                                    </a>
                                </FadeIn>
                            </div>
                        </Row>
                    </Container>
                    <div className="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </MDBMask>
            </Container >
        </section>
    );
}