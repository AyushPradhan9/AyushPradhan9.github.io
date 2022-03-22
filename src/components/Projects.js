import React from "react";
import { Container, Button } from 'react-bootstrap';

import appProfiler from './img/appProfiler.jpg';
import fileSorter from './img/fileSorter.jpg';
import ILS from './img/ILS-ReD.jpg';
import reddiTalk from './img/reddiTalk.jpg';
import EduHub from './img/EduHub.jpg';

import IlsReDModal from './modals/IlsReD';
import ReddiTalkModal from './modals/ReddiTalk';
import ASmileModal from './modals/ASmile';
import AppProfilerModal from './modals/AppProfiler';
import FileSorterModal from './modals/FileSorter';
import EduHubModal from './modals/EduHub';

export default function Projects() {
    const [showIlsModal, setShowIlsModal] = React.useState(false);
    const [showRedModal, setShowRedModal] = React.useState(false);
    const [showSmileModal, setShowSmileModal] = React.useState(false);
    const [showAppModal, setShowAppModal] = React.useState(false);
    const [showFileModal, setShowFileModal] = React.useState(false);
    const [showEduModal, setShowEduModal] = React.useState(false);

    return (
        <section id="Projects">
            <Container className="text-center main-cont">
                <h1 className="header heading font-weight-bold mt-5">Projects<hr className="underline" /></h1>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
                        <div className="card">
                            <div className="view overlay">
                                <img
                                    className="projectImg"
                                    src={ILS}
                                    alt="Library management system"
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <h2 className="header font-weight-bold card-title text-dark">ILS-ReD</h2>
                                    <hr />
                                    <div className="column">
                                        <p className="h5 text-dark">Management Software</p>
                                    </div>
                                    <p>Java | MySQL</p>
                                </div>
                                <Button variant="dark" onClick={() => setShowIlsModal(true)}>Details</Button>
                                <IlsReDModal
                                    show={showIlsModal}
                                    onHide={() => setShowIlsModal(false)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
                        <div className="card">
                            <div className="view overlay">
                                <img
                                    className="projectImg"
                                    src={reddiTalk}
                                    alt="reddiTalk"
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <h2 className="header font-weight-bold card-title text-dark">reddiTalk</h2>
                                    <hr />
                                    <div className="column">
                                        <p className="h5 text-dark">Group Chatting Software</p>
                                    </div>
                                    <p className="text-grey">Java | MySQL | Socket</p>
                                </div>
                                <Button variant="dark" onClick={() => setShowRedModal(true)}>Details</Button>
                                <ReddiTalkModal
                                    show={showRedModal}
                                    onHide={() => setShowRedModal(false)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
                        <div className="card">
                            <div className="view overlay">
                                <img
                                    className="projectImg"
                                    src="https://github.com/AyushPradhan9/Product-Landing-Web-Page/blob/master/img/screenshots/Product-landing1.jpg?raw=true"
                                    alt="Product Landing Page"
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <h2 className="header font-weight-bold card-title text-dark">aSmile</h2>
                                    <hr />
                                    <div className="column">
                                        <p className="h5 text-dark">Product Landing Page</p>
                                    </div>
                                    <p className="text-grey">HTML | CSS | Bootstrap</p>
                                </div>
                                <Button variant="dark" onClick={() => setShowSmileModal(true)}>Details</Button>
                                <ASmileModal
                                    show={showSmileModal}
                                    onHide={() => setShowSmileModal(false)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
                        <div className="card">
                            <div className="view overlay">
                                <img
                                    className="projectImg"
                                    src={EduHub}
                                    alt="EduHub"
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <h2 className="header font-weight-bold card-title text-dark">EduHub</h2>
                                    <hr />
                                    <div className="column">
                                        <p className="h5 text-dark">Educational Website</p>
                                    </div>
                                    <p className="text-grey">ReactJS</p>
                                </div>
                                <Button variant="dark" onClick={() => setShowEduModal(true)}>Details</Button>
                                <EduHubModal
                                    show={showEduModal}
                                    onHide={() => setShowEduModal(false)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
                        <div className="card">
                            <div className="view overlay">
                                <img
                                    className="projectImg"
                                    src={appProfiler}
                                    alt="Application Profile Launcher"
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <h2 className="header font-weight-bold card-title text-dark">appProfiler</h2>
                                    <hr />
                                    <div className="column">
                                        <p className="h5 text-dark">Utility Software</p>
                                    </div>
                                    <p className="text-grey">Python</p>
                                </div>
                                <Button variant="dark" onClick={() => setShowAppModal(true)}>Details</Button>
                                <AppProfilerModal
                                    show={showAppModal}
                                    onHide={() => setShowAppModal(false)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
                        <div className="card">
                            <div className="view overlay">
                                <img
                                    className="projectImg"
                                    src={fileSorter}
                                    alt="Window's File Sorter"
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    <h2 className="header font-weight-bold card-title text-dark">winFileSorter</h2>
                                    <hr />
                                    <div className="column">
                                        <p className="h5 text-dark">Utility Software</p>
                                    </div>
                                    <p className="text-grey">Python</p>
                                </div>
                                <Button variant="dark" onClick={() => setShowFileModal(true)}>Details</Button>
                                <FileSorterModal
                                    show={showFileModal}
                                    onHide={() => setShowFileModal(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <a
                    href="https://github.com/AyushPradhan9?tab=repositories"
                    id="show-all"
                    className="btn rounded btn-show-all"
                    rel="noreferrer"
                    target="_blank">
                    View all
                    <i className="fas fa-chevron-right" />
                </a>
            </Container>
        </section >
    );
}
