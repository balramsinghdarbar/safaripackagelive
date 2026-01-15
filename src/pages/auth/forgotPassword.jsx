import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import '../../css/style.css';
import '../../css/common.css';
import '../../css/responsive.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';

export default function forgotPassword() {
     const navigate = useNavigate();
    const [email, setEmail] = useState('');
    function handleSubmit(e) {

        e.preventDefault();

         if (!email) {
      
       toast.error("Email is Required!");
            return;
    }
       
        toast.success('Email Verify successfully !');
          navigate('/verify');
    }



    return (
        <>

            <section className="d-flex vh-100 coming-soon flex-column main-form-pages">
                <div className="col d-flex align-items-center justify-content-center text-center text-white left-section">

                    {/* Overlay Content */}
                    <div
                        className="row align-items-center justify-content-center flex-column h-100 overlay-content-min-width my-md-4 my-0">
                        <div className="overlay-content p-0  col-sm-8">
                            <form className="all-form text-start p-sm-5 p-5 pt-3" onSubmit={handleSubmit}>
                                <h2 className="mb-1 text-center mb-4">Password Reset</h2>
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <label htmlFor="email" className="form-label text-white">Email Address</label>
                                        <input type="email" id="email" className="form-control" placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid">
                                            {/* <Link to="/" className="btn btn-accent text-white border-accent" >Send Reset
                                                Link</Link> */}
                                            <button type="submit" className="btn btn-accent text-white border-accent">Send Reset
                                        Link</button>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="text-center mt-3 small-text">
                                            <Link to="/login" className="text-decoration-none text-white" >
                                                <i className="fa-solid fa-arrow-left me-1 text-white"></i>Back to Login</Link>
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