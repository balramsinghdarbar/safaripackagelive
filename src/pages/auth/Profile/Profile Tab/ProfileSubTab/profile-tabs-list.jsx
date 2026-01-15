import React, { useState } from 'react';
import userImg from '../../../../../assets/images/icons/user-img.jpeg';
export default function profiletabslist() {




    return (
        <>
            {/* Profile Tab  */}
            <div>
                <div className="dark-grey-bg rounded-3">
                    <div className="card mb-4 rounded-3">
                        <div className="card-body">

                            {/* About */}
                            <div className="mb-3">
                                <h6 className="fs-6 fw-bold">About</h6>
                                <p>This is about section</p>
                            </div>

                            {/* Social Media  */}
                            <div className="">
                                <h6 className="fs-6 fw-bold">Social Media</h6>
                                <div className="sociel_icons iconSmall mt-3 border-2">
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <div className="d-flex gap-2 align-items-center flex-wrap">
                                                <a href="javascript:void(0)"
                                                    className="d-flex align-items-center iconSize text-decoration-none dropdown-item">
                                                    <i className="fa-brands fa-instagram text-blue"></i>
                                                    <span
                                                        className="ms-2 fw-bold text-blue">Instagram:</span>
                                                </a>
                                                <p className="mt-1 mb-0 text-break">
                                                    https://instagram.com/yourprofile</p>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex gap-2 align-items-center flex-wrap">
                                                <a href="javascript:void(0)"
                                                    className="d-flex align-items-center iconSize text-decoration-none dropdown-item">
                                                    <i className="fa-brands fa-facebook-f text-blue"></i>
                                                    <span
                                                        className="ms-2 fw-bold text-blue">Facebook:</span>
                                                </a>
                                                <p className="mt-1 mb-0 text-break">
                                                    https://facebook.com/yourprofile</p>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex gap-2 align-items-center flex-wrap">
                                                <a href="javascript:void(0)"
                                                    className="d-flex align-items-center iconSize text-decoration-none dropdown-item">
                                                    <i className="fa-brands fa-youtube text-blue"></i>
                                                    <span className="ms-2 fw-bold text-blue">YouTube:</span>
                                                </a>
                                                <p className="mt-1 mb-0 text-break">
                                                    https://youtube.com/channel/yourchannel</p>
                                            </div>
                                        </li>
                                        <li className="mb-3">
                                            <div className="d-flex gap-2 align-items-center flex-wrap">
                                                <a href="javascript:void(0)"
                                                    className="d-flex align-items-center iconSize text-decoration-none dropdown-item">
                                                    <i className="fa-brands fa-x-twitter text-blue"></i>
                                                    <span className="ms-2 fw-bold text-blue">Twitter:</span>
                                                </a>
                                                <p className="mt-1 mb-0 text-break">https://x.com/yourhandle
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}