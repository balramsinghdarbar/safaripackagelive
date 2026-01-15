import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import userImg from '../../../../assets/images/icons/user-img.jpeg';
export default function edituserinfo() {

const [preview, setPreview] = useState(null); // State to hold the preview image URL

    const previewProfileImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result); // Update state with the preview URL
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
  
        document.getElementById('uploadProfile').click();
    };
    
      const navigate = useNavigate();
         const BackToProfile = () => {
            navigate("/profile");
         }
    return (
        <>
              <section id="profile-cover" className="position-relative mb-5">
            <div className="cover-image">
                <div className="overlay w-100 h-100 bg-dark bg-opacity-50"></div>
            </div>

            <div className="container-lg container-inner-padding position-relative">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="row align-items-center gy-4">

                             {/* Profile Image & Info  */}
                            <div className="col-12 col-lg-6 d-sm-flex align-items-center">
                                 {/* Profile Image */}
                                <div className="profile-img-wrapper position-relative text-center">
                                    <input type="file" id="uploadProfile" accept="image/*" className="d-none"
                                         onChange={previewProfileImage}/>
                                    <a href="javascript:void(0);" onClick={handleClick}>
                                         {/* Camera Icon */}
                                        <div
                                            className="position-absolute profile-img-icon bg-white rounded-circle shadow d-flex align-items-center justify-content-center">
                                            <i className="fa-solid fa-camera text-blue p-2"></i>
                                        </div>

                                         {/* Profile Picture  */}
                                        <img id="profileImagePreview" src={userImg}
                                            alt="Profile Picture"
                                            className="rounded-5 border border-white border-4 shadow-sm"/>
                                    </a>
                                </div>

                                 {/* User Info  */}
                                <div className="">
                                    <div className="profile-user-text ms-3 text-center text-lg-start mt-3 mt-lg-0">
                                        <h2 className="mb-0">John Doe</h2>
                                        <p className="text-muted mb-0">Wildlife Explorer & Safari Organizer</p>
                                    </div>
                                    <div className="edit-share ms-3 mt-3 text-sm-start text-center">
                                        <a href="/profile" onClick={BackToProfile}
                                            className="btn btn-sm btn-primary blue-btn-hover border-0 rounded-1 me-2">Back
                                            to Profile</a>
                                        <div className="follows-dropdown dropdown d-inline-block">
                                            <button className=" p-0 border-0 bg-transparent" type="button"
                                                id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                <i className="fa-solid fa-share text-blue"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end social-share-list"
                                                aria-labelledby="dropdownMenuButton1">
                                                <li className="mb-1">
                                                    <div className="d-flex gap-2 align-items-center flex-wrap">
                                                        <a href="javascript:void(0)"
                                                            className="d-flex align-items-center iconSize text-decoration-none dropdown-item text-blue fw-bold text-blue">
                                                            <i className="fa-brands fa-instagram text-blue me-2"></i>
                                                            Instagram
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="mb-1">
                                                    <div className="d-flex gap-2 align-items-center flex-wrap">
                                                        <a href="javascript:void(0)"
                                                            className="d-flex align-items-center iconSize text-decoration-none dropdown-item text-blue fw-bold text-blue">
                                                            <i className="fa-brands fa-facebook-f text-blue me-2"></i>
                                                            Facebook
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="mb-1">
                                                    <div className="d-flex gap-2 align-items-center flex-wrap">
                                                        <a href="javascript:void(0)"
                                                            className="d-flex align-items-center iconSize text-decoration-none dropdown-item text-blue fw-bold text-blue">
                                                            <i className="fa-brands fa-youtube text-blue me-2"></i>
                                                            YouTube
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="mb-1">
                                                    <div className="d-flex gap-2 align-items-center flex-wrap">
                                                        <a href="javascript:void(0)"
                                                            className="d-flex align-items-center iconSize text-decoration-none dropdown-item text-blue fw-bold text-blue">
                                                            <i className="fa-brands fa-x-twitter text-blue me-2"></i>
                                                            Twitter
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* Follower Stats  */}
                            <div className="col-12 col-lg-6 px-xl-3 px-0">
                                <div className="row text-center follow-list gy-2 gx-0">
                                    <div className="col-6 col-sm-3 border-end px-2">
                                        <p className="mb-0">Followers</p>
                                        <span>150</span>
                                    </div>
                                    <div className="col-6 col-sm-3 border-end px-2">
                                        <p className="mb-0">Following</p>
                                        <span>200</span>
                                    </div>
                                    <div className="col-6 col-sm-3 border-end px-2">
                                        <p className="mb-0">Safari Organized</p>
                                        <span>5</span>
                                    </div>
                                    <div className="col-6 col-sm-3">
                                        <p className="mb-0">Safari Joined</p>
                                        <span>3</span>
                                    </div>
                                </div>
                                <div className="row mt-4 g-0">
                                    <div className="col-12 text-sm-end text-center">
                                        <div className="account-delete mb-1 d-inline-block">
                                             {/* Deactivate Account  */}
                                            <a href="javascript:void(0)"
                                                className="btn btn-sm border-bg blue-btn-hover border-0 rounded-1 me-2">Deactivate
                                                Account</a>
                                        </div>
                                        <div className="account-delete mb-1 d-inline-block">

                                             {/* Delete Account  */}
                                            <a href="javascript:void(0)"
                                                className="btn btn-sm border-bg blue-btn-hover border-0 rounded-1 me-2">Delete
                                                Account</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
        </>
    );

}