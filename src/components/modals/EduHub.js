import { Modal } from 'react-bootstrap';
import eduHub from '../img/EduHub.jpg';

export default function EduHub(props) {
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
                        src={eduHub}
                        alt="EduHub"
                    />
                </div>
                <hr />
                <p>
                    EduHub is a <b>ReactJS</b> project built as a self learning intiative to help students learn about
                    in depth <b>data structure and algorithms</b> using easy to understant and dynamic visualizers. It currently has support for <b>5 data structures</b>, <b>12
                        sorting algorithms</b>, <b>4 path finding algorithms</b>, and many more.
                </p>
            </Modal.Body>
        </Modal >
    );
}