import { Button, Modal } from 'react-bootstrap';
import reddiTalk from '../img/reddiTalk.jpg';

export default function ReddiTalk(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    reddiTalk
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="view text-center">
                    <img
                        className="rounded mx-auto d-block inner-img"
                        src={reddiTalk}
                        alt="reddiTalk"
                    />
                </div>
                <hr />
                <p>
                    reddiTalk is a <b>Group chatting application</b> with similarities to <b>Reddit's community structure</b> which means it is open to all discussion application with support of chatting with individual users as well.
                    It has 2 subdivisions which are <b>Server interface</b> containing API calls for the client and
                    database for user data and the <b>Client interface</b> which will offer the functionalities to user.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <div className='m-auto'>
                    <Button className='btn-outline-primary'>
                        <a
                            href="https://github.com/ayushpradhan9/reddiTalk/"
                            id="source"
                            target="_blank"
                        >
                            Source Code <i className="fab fa-github" />
                        </a>
                    </Button>
                </div>
            </Modal.Footer>
        </Modal >
    );
}