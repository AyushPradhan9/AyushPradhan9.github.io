import { Button, Modal } from 'react-bootstrap';
import fileSorter from '../img/fileSorter.jpg';

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
                    winFileSorter
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="view text-center">
                    <img
                        className="rounded mx-auto d-block inner-img"
                        src={fileSorter}
                        alt="winFileSorter"
                    />
                </div>
                <hr />
                <p>
                    Window's File Sorter (winFileSorter) is a <b>Python (GUI/Tkinter)</b> program for sorting files based on their extension into appropriate folders.
                    It is divided into two types of sorting - <b>Dynamic and Static sorting</b> and generates a
                    listFiles.txt file to give an overview of the sorted files.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <div className='m-auto'>
                    <Button className='btn-outline-primary'>
                        <a
                            href="https://github.com/AyushPradhan9/winFileSorter"
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