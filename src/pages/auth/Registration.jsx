import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import '../../css/style.css';
// import '../../css/common.css';
// import '../../css/responsive.css';
// import '../../css/full-forms.css';
// import '../../css/all-form.css';
// import '../../css/listingpages.css';
// import '../../css/package-listing-detail.css';

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [mobile, setMoblie] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();

        if (!name) {
            toast.error("Name is Required!");
        }
        if (!email) {

            toast.error("Email is Required!");
            return;
        }
        if (!password) {
            toast.error("Password is Required!");
            return;
            console.log(password);
        }
          if (!mobile) {
            toast.error("Mobile is Required!");
            return;
            console.log(password);
        }
        if (!confirmPassword) {
            toast.error("confirmPassword is Required!");
            return;
            console.log(confirmPassword);
        }
        
        // else{
        //     toast.error("All field are Required!");
        //     return;
        // }

        toast.success('Your Account Create successfully!');
        navigate('/login');
    }
    return (
        <>
            <section className="d-flex min-vh-100 coming-soon flex-column main-form-pages">
                <div className="col d-flex align-items-center justify-content-center text-center text-white left-section">

                    {/* Overlay Content  */}
                    <Row className=" align-items-center justify-content-center flex-column h-100 overlay-content-min-width my-md-4 my-0">
                        <Col xl={6} md={8} className=" overlay-content p-0 ">
                            <form className="all-form text-start p-sm-5 p-5 pt-3" onSubmit={handleSubmit}>
                                <h2 className="mb-1 text-center mb-4">Sign Up & Start Your Safari Journey</h2>

                                <Row>
                                    <Col md={6} className="mb-3">
                                        <label htmlFor="fullname" className="form-label text-white">Full Name</label>
                                        <input type="text" className="form-control" id="fullname" placeholder="John Doe" 
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </Col>

                                    <Col md={6} className="mb-3">
                                        <label htmlFor="mobile" className="form-label text-white">Mobile Number</label>
                                        <input type="tel" className="form-control" id="mobile" placeholder="+91 9876543210" value={mobile}
                                            onChange={(e) => setMoblie(e.target.value)} />
                                    </Col>

                                    <Col md={6} className="mb-3">
                                        <label htmlFor="email" className="form-label text-white">Email Address</label>
                                        <input type="email" className="form-control" id="email" placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <label htmlFor="password" className="form-label text-white">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </Col>

                                    <Col md={6} className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" placeholder="••••••••"
                                             value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}/>
                                    </Col>

                                    <div className="form-check mb-3 d-flex align-items-center gap-2">
                                        <input className="form-check-input" type="checkbox" id="terms" required />
                                        <label className="form-check-label remember-me" htmlFor="terms">
                                            I agree to the <a href="/terms-conditions"
                                                className="text-white">terms & conditions</a>
                                            {/* <Link to="/registration" className="text-white" >Sign Up</Link> */}
                                        </label>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-accent text-white border-accent">Create
                                            Account</button>
                                    </div>

                                    <div className="text-center mt-3 small-text">
                                        Already registered?
                                        <Link to="/login" className="text-white" >Login here</Link>
                                    </div>
                                </Row>
                            </form>
                        </Col>
                    </Row>

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