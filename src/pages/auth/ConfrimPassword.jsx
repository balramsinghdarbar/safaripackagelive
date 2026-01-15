import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
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

export default function ConfrimPassword() {
   const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    function handleSubmit(e) {
        e.preventDefault();

        if (!password) {
            toast.error("Password is Required!");
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

        toast.success('Your Password Create  successfully !');
          navigate('/login');
    }
    return (
        <>
            <section className="d-flex min-vh-100 coming-soon flex-column main-form-pages">
                <div className="col d-flex align-items-center justify-content-center text-center text-white left-section">

                    {/* Overlay Content  */}
                    <Row className=" align-items-center justify-content-center flex-column h-100 overlay-content-min-width my-md-4 my-0">
                        <Col xl={10} md={10} className=" overlay-content p-0 ">
                            <form className="all-form text-start p-sm-5 p-5 pt-3" onSubmit={handleSubmit}>
                                <h2 className="mb-1 text-center mb-4">Sign Up & Start Your Safari Journey</h2>

                                <Row>
                                    <Col md={12} className="mb-3">
                                        <label htmlFor="password" className="form-label text-white">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </Col>
                                    <Col md={12} className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" placeholder="••••••••"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)} />
                                    </Col>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-accent text-white border-accent">Submit</button>
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