import React from "react";
import "./style.css";
import { Container } from 'react-bootstrap';
import './sticky.css';

export default function Skills() {
    return (
        <section id="Skills">
            <div className="rgba-grey-slight">
                <Container className="main-cont">
                    <h1 className="header m-auto text-center font-weight-bold mt-5">Skills<hr className="underline" /></h1>
                    <h4 className="text-center p-2">Some of my proficient technical skills include:</h4>
                    <div className="container">
                        <div className="row">
                            <ul className="text-center">
                                <li className="col-10 col-md-5 col-lg-3 pt-2">
                                    <a>
                                        <h2 className="header font-weight-bold">React JS</h2>
                                        <hr className="underline" />
                                        <p> Contributed in multiple projects in various events like GSSOC and built numerous professional/personal websites.</p>
                                    </a>
                                </li>
                                <li className="col-10 col-md-5 col-lg-3 pt-2">
                                    <a>
                                        <h2 className="header font-weight-bold">DSA</h2>
                                        <hr className="underline" />
                                        <p>Achieved reputed rating in CodeChef and University level coding competitions.
                                            Solved hundreds of problems on HackerRank, LeetCode and GeeksforGeeks.</p>
                                    </a>
                                </li>
                                <li className="col-10 col-md-5 col-lg-3 pt-2">
                                    <a>
                                        <h2 className="header font-weight-bold">Java</h2>
                                        <hr className="underline" />
                                        <p>Built handful of fully fledged desktop based application for
                                            numerous fields like management and social media with complete DBMS support.</p>
                                    </a>
                                </li>
                                <li className="col-10 col-md-5 col-lg-3 pt-2">
                                    <a>
                                        <h2 className="header font-weight-bold">Web Dev</h2>
                                        <hr className="underline" />
                                        <p>Developed tens of websites for various commercial and personal
                                            purposes, including Product landing pages, Company websites and Digital portfolio.</p>
                                    </a>
                                </li>
                                <li className="col-10 col-md-5 col-lg-3 pt-2">
                                    <a>
                                        <h2 className="header font-weight-bold">Python</h2>
                                        <hr className="underline" />
                                        <p>Developed numerous utility applications like Windows file sorter
                                            and Application profile launcher with vibrant user interface.</p>
                                    </a>
                                </li>
                                <li className="col-10 col-md-5 col-lg-3 pt-2">
                                    <a>
                                        <h2 className="header font-weight-bold">MySQL</h2>
                                        <hr className="underline" />
                                        <p>Integrated and developed DBMS architectures for management program, chat appication
                                            and mobile applications using MySQL for Java.</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container >
            </div>
        </section>
    );
}