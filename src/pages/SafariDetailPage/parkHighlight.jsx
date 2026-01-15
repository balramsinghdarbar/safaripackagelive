import React from "react";
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import DetailSay from './DetailSay';
export default function SafariPackagesNav() {
    return (
        <>
            <div className="col-lg-4">
                <div className="park-highlights">
                    <h3 className="text-blue text-center">Park Highlights</h3>
                    <div className="dark-grey-bg quick-info-box p-3 rounded-3 mb-4">
                        <div className="quickinfo-container mb-3">
                            <h4 className="mb-1 pb-2 border-bottom border-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#696868">
                                    <path
                                        d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                                </svg>
                                Quick Info
                            </h4>
                            <ul className="list-unstyled mb-0 quickinfo-list">
                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div className="d-flex gap-1">
                                        <span className="text-dark">Location:</span>
                                        <p className="d-inline-block mb-0 text-dark">Sawai Madhopur, Rajasthan</p>
                                    </div>
                                </li>
                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div className="d-flex gap-1">
                                        <span className="text-dark">Area:</span>
                                        <p className="d-inline-block mb-0 text-dark">59 km2 (23 sq mi)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="wildlife-container mb-3">
                            <h4 className="mb-1 pb-2 border-bottom border-accent">
                                <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#696868">
                                    <path
                                        d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                                </svg>
                                Wildlife You May See
                            </h4>
                            <ul className="list-unstyled mb-0 quickinfo-list">
                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div>
                                        <p className="d-inline-block mb-0 text-dark">Bengal Tiger, Leopard</p>
                                    </div>
                                </li>
                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div>
                                        <p className="d-inline-block mb-0 text-dark">Sloth Bear, Hyena, Marsh
                                            Crocodile
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div>
                                        <p className="d-inline-block mb-0 text-dark">Sambar, Spotted Deer, Nilgai
                                        </p>
                                    </div>
                                </li>

                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div>
                                        <p className="d-inline-block mb-0 text-dark">300+ bird species</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="zones-container mb-3">
                            <h4 className="mb-1 pb-2 border-bottom border-accent">
                                <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#696868">
                                    <path
                                        d="M480-304 304-480l176-176 176 176-176 176Zm56 199q-11 11-26 17t-30 6q-15 0-30-6t-26-17L105-424q-11-11-17-26t-6-30q0-15 6-30t17-26l318-318q12-12 26.5-18t30.5-6q16 0 30.5 6t26.5 18l318 318q11 11 17 26t6 30q0 15-6 30t-17 26L536-105Zm-56-87 288-288-288-288-288 288 288 288Z" />
                                </svg>
                                Safari Zones
                            </h4>
                            <ul className="list-unstyled mb-0 quickinfo-list">

                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div className="">
                                        <span className="text-dark">Zones 1–5:</span>
                                        <p className="d-inline-block mb-0 text-dark">Core – High tiger activity</p>
                                    </div>
                                </li>
                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div className="">
                                        <span className="text-dark">Zones 6–10:</span>
                                        <p className="d-inline-block mb-0 text-dark">Buffer – Less crowded</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="zones-container mb-0">
                            <h4 className="mb-1 pb-2 border-bottom border-accent">
                                <svg className="me-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#696868">
                                    <path
                                        d="M240-200q-50 0-85-35t-35-85H40v-360q0-33 23.5-56.5T120-760h560l240 240v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm360-360h160L640-680h-40v120Zm-240 0h160v-120H360v120Zm-240 0h160v-120H120v120Zm120 290q21 0 35.5-14.5T290-320q0-21-14.5-35.5T240-370q-21 0-35.5 14.5T190-320q0 21 14.5 35.5T240-270Zm480 0q21 0 35.5-14.5T770-320q0-21-14.5-35.5T720-370q-21 0-35.5 14.5T670-320q0 21 14.5 35.5T720-270ZM120-400h32q17-18 39-29t49-11q27 0 49 11t39 29h304q17-18 39-29t49-11q27 0 49 11t39 29h32v-80H120v80Zm720-80H120h720Z" />
                                </svg>
                                Safari Options
                            </h4>
                            <ul className="list-unstyled mb-0 quickinfo-list">

                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div className="">
                                        <p className="d-inline-block mb-0 text-dark">Jeep (6-seater)</p>
                                    </div>
                                </li>
                                <li className="d-flex gap-1 align-items-xl-center">
                                    <div><i className="fa fa-circle" aria-hidden="true"></i></div>
                                    <div className="">
                                        <p className="d-inline-block mb-0 text-dark">Canter
                                            (20-seater)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <DetailSay />
                </div>
            </div>
        </>
    );
}