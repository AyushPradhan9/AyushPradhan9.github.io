import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <section id="Contact">
            <div className="rgba-grey-slight">
                <Container className="main-cont text-center">
                    <h1 className="header font-weight-bold mt-5">Contact<hr className="underline" /></h1>
                    <h4 className="text-center w-responsive mx-auto">Feel free to contact me. Cheers!</h4>
                    <Row>
                        <div className="col-md-9 m-auto mb-md-0 mb-5">
                            <form action="https://formspree.io/f/mgeppwnj" method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="email" name="_replyto" className="form-control" placeholder="Your Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea type="text" name="message" className="form-control md-textarea" rows="3" placeholder="Your Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input className="btn btn-dark w-25" type="submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    );
}