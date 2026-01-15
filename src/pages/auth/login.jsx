import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import api from "../../api/api";
import {  Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function login() {

    //  const [data, setData] = useState([]);
    
    // useEffect(() => {
    //   api.get("/postman-data")
    //     .then(res => {
    //       console.log(res.data); // check data
    //       setData(res.data)
    //     })
    //     .catch(err => console.error(err));
    // }, []);
    //const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // let navigateTo = "";
    function handleSubmit(e) {
         e.preventDefault();
             

        if (!email) {
           toast.error("Email is Required!");
          return;
        } 
        if (!password) {
            toast.error("Password is Required!");
            return;
            console.log(password);
        }
        toast.success(' successfully Login!');
        navigate('/');
    }


    return (
        <>
            <section className="d-flex vh-100 coming-soon flex-column main-form-pages">
                <div className="col d-flex align-items-center justify-content-center text-center text-white left-section">

                    {/* Overlay Content */}
                    <div
                        className="row align-items-center justify-content-center flex-column h-100 overlay-content-min-width my-md-4 my-0">
                        <div className="overlay-content p-0 col-md-6 col-sm-8">
                            <form className="all-form text-start p-sm-5 p-5 pt-3" onSubmit={handleSubmit}>
                                <h2 className="mb-1 text-center mb-4">Sign In</h2>
                                <div className="row">
                                    <div className="mb-3 col-12">
                                        <label htmlFor="email" className="form-label text-white">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="you@example.com"
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}  />
                                    </div>
                                    <div className="mb-2 col-12">
                                        <label htmlFor="password" className="form-label text-white">Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="••••••••"
                                             value={password}
                                            onChange={(e)=>setPassword(e.target.value)} />
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
                                            <div className="form-check d-flex gap-2 align-items-start mb-0 me-3">
                                                <input className="form-check-input pb-0 mb-0" type="checkbox" id="rememberMe" required />
                                                <label className="remember-me form-check-label text-light small pb-0 mb-0"
                                                    htmlFor="rememberMe">Remember
                                                    Me</label>
                                            </div>
                                            {/* <a href="https://safari-meet.codelive.info/forget-password.html"
                                                className=""></a> */}
                                                <Link to="/forgotpassword" className="forgot text-white small-text">Forgot your password?</Link>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button type="submit"
                                                className="btn bg-accent border-accent py-1 px-4 text-white mb-2" >Sign
                                                In</button>
                                                
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                                            <p className="small-text me-2 mb-1">New User?
                                                 <Link to="/registration" className="text-white" >Sign Up</Link>
                                              
                                            </p>
                                            <p className="small-text mb-1">New Agency?
                                                {/* <a href=" https://safari-meet.codelive.info/travel-agency-registration.html"
                                                    className="text-white">Sign Up</a> */}
                                                     <Link to="/agency-registration" className="text-white" >Sign Up</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                           
                        </div>
                    </div>
                    {/* Social Icons  */}
                    <div className="social-icons-forms position-fixed d-flex flex-md-column flex-row gap-2 pb-md-4 pb-2">
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="#" className="text-white text-decoration-none"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
            </section>
        </>
    );

}