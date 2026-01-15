import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import '../../css/style.css';
import '../../css/common.css';
import '../../css/responsive.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';

export default function Registration() {
    const [name, setName] = useState('');
     const [license, setLicense] = useState('');
     const [contact, setContact] = useState('');
      const [email, setEmail] = useState('')
     const [phone, setPhone] = useState('');
     const [website, setWebsite] = useState('');
     const [location, setLocation] = useState('');
     const [experience, setExperience] = useState('');
     const [description, setDescription] = useState('');
    function handleSubmit(e) {
        e.preventDefault();

        if (!name) {
            toast.error("Name is Required!");
        }
        if (!license) {
            toast.error("License Number is Required!");
            return;
            console.log(license);
        }
        if (!email) {
            toast.error("Email is Required!");
            return;
        }
        if (!contact) {
            toast.error("Contact Number is Required!");
            return;
            console.log(contact);
        }
        
        if (!phone) {
            toast.error("Phone Number is Required!");
            return;
            console.log(phone);
        }
         if (!website) {
            toast.error("Website Url is Required!");
            return;
            console.log(website);
        }
        if (!location) {
            toast.error("Location is Required!");
            return;
            console.log(location);
        }
         if (!experience) {
            toast.error("Your Experience is Required!");
            return;
            console.log(experience);
        }
        if (!description) {
            toast.error("Agency Description is Required!");
            return;
            console.log(description);
        }
       
        toast.success('Your Agency Create successfully !');

    }
    return (
        <>
            <section className="d-flex min-vh-100 coming-soon flex-column main-form-pages">
                <div className="col d-flex align-items-center justify-content-center text-center text-white left-section">

                    {/* Overlay Content  */}
                    <Row className=" align-items-center justify-content-center flex-column h-100 overlay-content-min-width my-md-4 my-0">
                        <Col xl={6} md={8} className=" overlay-content p-0 ">
                            <form className="all-form text-start p-sm-5 p-5 pt-3" onSubmit={handleSubmit}>
                                <h2 className="mb-1 text-center mb-4">Sign Up as a Safari Travel Partner</h2>

                                <Row>
                                    <Col lg={4} sm={6} >
                                        <label htmlFor="agencyname" className="form-label text-white">Agency Name</label>
                                        <input type="text" className="form-control" id="agencyname" placeholder="Wild Tracks Travel Co."
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </Col>

                                    <Col lg={4} sm={6} >
                                        <label htmlFor="license" className="form-label text-white">License Number</label>
                                        <input type="text" className="form-control" id="license" placeholder="LIC-SFR-2025-0123" value={license}
                                            onChange={(e) => setLicense(e.target.value)} />
                                    </Col>

                                    <Col lg={4} sm={6} >
                                        <label htmlFor="person" className="form-label text-white">Contact Person</label>
                                        <input type="text" className="form-control" id="person" placeholder="Amit Sharma"
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)} />
                                    </Col>

                                    <Col lg={4} sm={6} className="mt-3">
                                        <label htmlFor="number" className="form-label text-white">Phone Number</label>
                                        <input type="tel" className="form-control" id="number" placeholder="+91 9876543210"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)} />
                                    </Col>
                                    <Col lg={4} sm={6}  className="mt-3">
                                        <label htmlFor="email" className="form-label text-white">Email Address</label>
                                        <input type="email" className="form-control" id="email" placeholder="info@wildtracks.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </Col>
                                    <Col lg={4} sm={6} className="mt-3">
                                        <label htmlFor="website" className="form-label text-white">Website</label>
                                        <input type="url" className="form-control" id="website" placeholder="https://www.wildtracks.com"
                                            value={website}
                                            onChange={(e) => setWebsite(e.target.value)} />
                                    </Col>
                                    <Col lg={4} sm={6} className="mt-3">
                                        <label htmlFor="location" className="form-label text-white">Location</label>
                                        <input type="text" className="form-control" id="location" placeholder="Ranthambore, Rajasthan"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)} />
                                    </Col>
                                     <Col lg={4} sm={6} className="mt-3">
                                        <label htmlFor="experience" className="form-label text-white">Years of Experience</label>
                                        <input type="text" className="form-control" id="experience" placeholder="8"
                                            value={experience}
                                            onChange={(e) => setExperience(e.target.value)} />
                                    </Col>
                                    <Col sm={12} className="mt-3">
                                        <label className="form-label text-white">Agency Description</label>
                                        <textarea className="form-control" rows="3"
                                            placeholder="Share your safari expertise, services offered, and regions covered..."
                                            value={description} onChange={(e) =>setDescription(e.target.value)}>
                                        </textarea>
                                    </Col>
                                    <div className="form-check my-3 d-flex align-items-center gap-2">
                                        <input className="form-check-input " type="checkbox" id="terms" required />
                                        <label className="form-check-label  remember-me" htmlFor="terms">
                                             I confirm the above details and accept the 
                                              <a href="/terms-conditions"
                                                className="text-white"> terms & conditions</a>
                                            {/* <Link to="/registration" className="text-white" >Sign Up</Link> */}
                                        </label>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-accent text-white border-accent">Register
                                    Agency</button>
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