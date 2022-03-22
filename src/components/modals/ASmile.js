import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

export default function ASmile(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    aSmile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="view text-center">
                    <img
                        className="rounded mx-auto d-block inner-img"
                        src="https://github.com/AyushPradhan9/Product-Landing-Web-Page/blob/master/img/screenshots/Product-landing1.jpg?raw=true"
                        alt="Product Landing Page"
                    />
                </div>
                <hr />
                <p>
                    A UI based responsive website made for <b>Product landing page</b> similiar to Amazon's home page.
                    This website was made using <b>HTML</b>, <b>CSS</b> and <b>Bootstrap</b>.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row>
                        <Col className='text-center'>
                            <Button className='btn-outline-primary'>
                                <a
                                    href="https://ayushpradhan9.github.io/Product-Landing-Web-Page/"
                                    id="website"
                                    target="_blank"
                                >
                                    View Website{' '}
                                    <i className="fas fa-external-link-alt" />
                                </a>
                            </Button>
                        </Col>
                        <Col className='text-center'>
                            <Button className='btn-outline-primary'>
                                <a
                                    href="https://github.com/AyushPradhan9/Product-Landing-Web-Page"
                                    id="source"
                                    target="_blank"
                                >
                                    Source Code <i className="fab fa-github" />
                                </a>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Footer>
        </Modal >
    );
}