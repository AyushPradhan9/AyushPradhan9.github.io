import { Button, Modal } from 'react-bootstrap';
import ILS from '../img/ILS-ReD.jpg';

export default function IlsReD(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ILS-ReD
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="view text-center">
                    <img
                        className="rounded mx-auto d-block inner-img"
                        src={ILS}
                        alt="Library management system"
                    />
                </div>
                <hr />
                <p>
                    Integrated library system with relational database
                    (ILS-ReD) is a <b>Java Group project</b> for our
                    college. The project has a user-friendly interface and
                    better efficiency with integrated <b>MySQL</b> database.
                    The whole project is mainly divided into <b>Admin Section</b>
                    , <b>Library Section</b> and <b>Student section</b>.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <div className='m-auto'>
                    <Button className='btn-outline-primary'>
                        <a
                            href="https://www.github.com/ayushpradhan9/Integrated-Library-Management-System"
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