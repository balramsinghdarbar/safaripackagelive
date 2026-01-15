import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import userImg from '../../../../../assets/images/icons/user-img.jpeg';
export default function following() {




    return (
        <>
            <div>
                {/* Following Content  */}
                {/* <p className="my-3">No Following.</p>  */}
                <div className="following-list my-3">
                    <ul className="list-unstyled">
                        <li>
                            <div className="d-flex align-items-center">
                                {/* Clickable Area (Image + Text inside anchor)  */}
                                <a href="javascript:void(0)"
                                    className="d-flex align-items-center text-decoration-none w-100">
                                    <img src={userImg} alt="user-img" className="profile-user-icon rounded-circle" />

                                    <div className="profile-username ms-3 text-dark">
                                        <p className="mb-0 profile-user-name text-truncate">john_doe</p>
                                        <p className="mb-0 profile-person-name text-truncate">John Doe
                                        </p>
                                    </div>
                                </a>

                                {/* Buttons Section */}
                                <div className="message-btn d-flex align-items-center ms-3 gap-2">
                                    <a href="javascript:void(0)"
                                        className="btn btn-sm btn-primary blue-btn-hover border-0 rounded-1">Message</a>
                                     <Dropdown className="follows-dropdown profile-button">
                                         <Dropdown.Toggle   role="button" aria-expanded="false"  className=" btn p-0 border-0 bg-transparent">
                                             <i className="fa-solid fa-ellipsis-vertical"></i>
                                         </Dropdown.Toggle>
                                      
                                        <Dropdown.Menu className="dropdown-menu-end profile-mute">
                                             <Dropdown.Item >Mute</Dropdown.Item>
                                              <Dropdown.Item >Unfollow</Dropdown.Item>
                                        </Dropdown.Menu>
                                        
                                   
                                    </Dropdown>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>



        </>
    );

}