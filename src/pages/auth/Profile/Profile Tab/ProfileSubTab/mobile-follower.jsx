import React, { useState } from 'react';
import userImg from '../../../../../assets/images/icons/user-img.jpeg';
export default function mobilefollower() {

    return (
        <>
           {/* <!-- Follower Tab (Mobile only) --> */}
                                <div className="tab-pane fade" id="mobile-follower" role="tabpanel">
                                <div className="card mt-lg-4">
                                    <div className="card-body">
                                        <h6 className="fw-bold">Follower</h6>
                                        {/*  <p className="mt-3">No Follower</p>  */}
                                        <ul className="list-unstyled mt-3">
                                            <li className="mb-3">
                                                <div className="d-flex align-items-center">
                                                    {/*  Clickable Area (Image + Text inside anchor)  */}
                                                    <a href="javascript:void(0)"
                                                        className="d-flex align-items-center text-decoration-none w-100">
                                                        <img src={userImg} alt="user-img"
                                                            className="profile-user-icon rounded-circle"/>

                                                        <div className="profile-username ms-lg-3 ms-2 text-dark">
                                                            <p className="mb-0 profile-user-name text-truncate">john_doe</p>
                                                            <p className="mb-0 profile-person-name text-truncate">John Doe
                                                            </p>
                                                        </div>
                                                    </a>

                                                     {/* Buttons Section  */}
                                                    <div className="message-btn d-flex align-items-center ms-3 gap-2">
                                                        <a href="javascript:void(0)"
                                                            className="btn btn-sm btn-primary blue-btn-hover border-0 rounded-1 d-sm-block d-none">Message
                                                        </a>
                                                        <a href="javascript:void(0)"
                                                            className="btn btn-sm text-blue border-0 rounded-1 d-sm-none d-block py-0">
                                                            <i className="fa-regular fa-message d-sm-none d-block"></i>

                                                        </a>
                                                        <div className="follows-dropdown">
                                                            <button className="btn p-0 border-0 bg-transparent"
                                                                type="button" id="dropdownMenuButton1">
                                                                <i className="fa-solid fa-xmark"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
        </>
    );
}