import { Button, Modal } from 'react-bootstrap';
import appProfiler from '../img/appProfiler.jpg';

export default function AppProfiler(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    appProfiler
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="view text-center">
                    <img
                        className="rounded mx-auto d-block inner-img"
                        src={appProfiler}
                        alt="appProfiler"
                    />
                </div>
                <hr />
                <p>
                    Application Profile Launcher (appProfiler) is developed
                    with <b>Python (GUI/Tkinter)</b> to make profiles of
                    daily routine's applications to be launched with a
                    single click. For example while working on project
                    daily, requires IDE, browser and a word file, with the
                    appProfiler all that can be launched with a single
                    click!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <div className='m-auto'>
                    <Button className='btn-outline-primary'>
                        <a
                            href="https://github.com/AyushPradhan9/appProfiler"
                            id="source"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code <i className="fab fa-github" /></a>
                    </Button>
                </div>
            </Modal.Footer>
        </Modal >
    );
}