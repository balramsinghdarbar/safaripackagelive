import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import safarifooterImg from '../../assets/images/safari-footer-logo.png';
import { useNavigate } from "react-router-dom";
// import userImg from '.../assets/images/user.png'
import '../../css/style.css';
import '../../css/common.css';
import '../../css/responsive.css';
import instragramImg  from'../../assets/images/instragram.png'

// const navLinkStyles = ({ isActive }) => ({
//     color: isActive ? '#F59856' : ' #1D4358',
// });


export default function Header() {
    const navigate = useNavigate();
        const goToAbout = () => {
             navigate("/");
            navigate("/about");
            navigate("/terms-conditions");
            navigate("/privacy-policy");
            navigate("/refund-policy");
            navigate("/faq");
        }
    return (
        //  Header
        <div>
           <footer className="site-footer pt-md-5 pt-3">
        <div className="container-lg container-padding">
            <div className="row gy-4 justify-content-between mt-5 pt-sm-4 pt-5">
                <div className="col-lg-3 footer-section footer-logo">
                    <a href="/" onClick={goToAbout}>
                        <img src={safarifooterImg} alt="SafariMeet Logo"/></a>
                </div>
                <div className="col-md-auto col-sm-6 footer-section">
                    <h3 className="position-relative">Useful Links <span className="border-half"></span></h3>
                    <ul className="footer-ul">
                        <li><a href="javascript:void(0)" onClick={goToAbout} className="active">About Us</a></li>
                        <li><a href="/refund-policy" onClick={goToAbout}>FAQ</a></li>
                        <li><a href="javascript:void(0)">Blogs</a></li>
                    </ul>
                </div>
                <div className="col-md-auto col-sm-6 footer-section">
                    <h3 className="position-relative">Policies and Terms <span className="border-half"></span></h3>
                    <ul className="footer-ul">
                        <li><a href="javascript:void(0)" onClick={goToAbout}>Privacy Policy</a></li>
                        <li><a href="javascript:void(0)" onClick={goToAbout}>Refund Policy</a></li>
                        <li><a href="javascript:void(0)" onClick={goToAbout}>Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="col-md-auto footer-section">
                    <h3 className="position-relative">Contact Us <span className="border-half"></span></h3>
                    <ul className="footer-ul">
                        <li><a href="javascript:void(0)">Address: <span className="ps-2">Pune, India</span></a></li>
                        <li><a href="javascript:void(0)">Email: <span className="ps-2">support@safarimeet.in</span></a></li>
                        <li><a href="javascript:void(0)"><img src={instragramImg} className="safarilogo" />safarimeet.in</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
        <div className="footer-bottom mt-4 py-2">
            <p className="mb-0"> COPYRIGHT © 2025 | ALL RIGHT RESERVED </p>
        </div>
    </footer>
        </div>
    );
}