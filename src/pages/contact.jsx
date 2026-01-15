import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import TopRated from '../Components/Comman/TopRated';
import CommanBanner from "../Components/Comman/CommanBanner";
import { toast } from "react-toastify";
export default function contact() {
    
    const [name, setName]= useState("");
        const [park, setPark] = useState("");
        const [email,setEmail] = useState("");
        const [phone,setPhone] = useState("");
        const [travel,setTraval] = useState("");
        const [parkinterested,setParkIntersted] = useState ("");
       const [traveldate,setTravelDate] = useState("");
       const [safaritype,setSafariType] = useState("");
       const [require,setRequir] = useState("");
      
           function handleSubmit(e) {
                   e.preventDefault();
                       
          
                  if (!name) {
                  
                     toast.error("Name is Required!");
                  return;
                  } 
                  if (!email) {
                      toast.error("Email is Required!");
                      return;
                  }
                  if (!phone) {
                      toast.error("Please Enter Phone Number!");
                      return;
                  }
                  if (!travel) {
                      toast.error("Please Select Travel");
                      return;
                  }
                  if (!parkinterested) {
                      toast.error("Please Select Park Interested");
                      return;
                  }
                   if (!traveldate) {
                      toast.error("Select Travel Date!");
                      return;
                  }
                   if (!safaritype) {
                      toast.error("Select Safari Type!");
                      return;
                  }
                   if (!require) {
                      toast.error("Enter Requirement!");
                      return;
                  }
              
                  
                   toast.success('Your Information is Correct!');
              }

    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <CommanBanner />
            </div>
            <section className="booking-section">
                <div className="container-lg container-inner-padding">

                    <Row className=" gy-4 my-sm-3 align-items-center">
                        {/* Contact Form  */}
                        <Col lg={7}>
                            <form className="all-form grey-bg p-3 rounded-3" id="contact-form" onSubmit={handleSubmit}>
                                <Row className=" gx-3">
                                     <Col md={6} className=" mb-3">
                                        <label htmlFor="name" className="form-label">Your Name *</label>
                                        <input type="text" className="form-control" 
                                        id="name" placeholder="Name *" value={name} onChange={(e)=> setName(e.target.value)} />
                                    </Col>
                                    <Col md={6} className=" mb-3">
                                        <label htmlFor="email" className="form-label">Email Address *</label>
                                        <input type="email" className="form-control" id="email" placeholder="Email Address *"
                                            value={email} onChange={(e) => setEmail(e.target.value)}  />
                                    </Col>
                                    <Col md={6} className=" mb-3">
                                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                                        <input type="tel" className="form-control" id="phone" placeholder="Phone with Country Code *"
                                             value={phone} onChange={(e)=>setPhone(e.target.value)} />
                                    </Col>
                                    <Col md={6} className=" mb-3">
                                        <label htmlFor="people-traveling" className="form-label">Number of People Traveling
                                            *</label>
                                        <input type="number" className="form-control" id="people-traveling"
                                            placeholder="Number of People Traveling *" 
                                            value={travel} onChange={(e)=>setTraval(e.target.value)} />
                                    </Col>
                                    <Col md={6} className=" mb-3">
                                        <label htmlFor="travel-date" className="form-label">Date of Travel
                                            *</label>
                                        <input type="date" className="form-control py-2" id="travel-date" placeholder="Date of Travel *" 
                                            value={traveldate} onChange={(e)=>setTravelDate(e.target.value)} />
                                    </Col>
                                    <Col md={6} className=" mb-3">
                                        <label htmlFor="park" className="form-label">Park you are interested in?
                                            *</label>
                                        <select className="form-select py-2" id="park" 
                                        value={parkinterested} onChange={(e)=>setParkIntersted(e.target.value)}>
                                            <option value="">Select Park</option>
                                            <option>Ranthambore</option>
                                            <option>Kanha</option>
                                            <option>Bandhavgarh</option>
                                            <option>Jim Corbett</option>
                                        </select>
                                    </Col>
                                    <Col xs={12} className=" mb-3">
                                        <label htmlFor="safari-type" className="form-label">Safari Type
                                            *</label>
                                        <select className="form-select py-2" id="safari-type" 
                                        value={safaritype} onChange={(e)=>setSafariType(e.target.value)}>
                                            <option value="">Select Safari Type *</option>
                                            <option>Shared Jeep Safari</option>
                                            <option>Private Jeep Safari</option>
                                            <option>Canter Safari</option>
                                        </select>
                                    </Col>
                                    <Col xs={12} className=" mb-3">
                                        <textarea className="form-control" rows="4"
                                            placeholder="Any custom message about your requirements. *" 
                                            value={require} onChange={(e)=>setRequir(e.target.value)}></textarea>
                                    </Col>
                                    <Col xs={12} className=" mb-1 text-center">
                                        <button type="submit"
                                            className="btn btn-sm btn-primary blue-btn-hover 
                                            border-0 rounded-1 px-4 rounded-1 btn-submit mt-2">Submit Inquiry
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                        {/* Contact Info  */}
                        <Col lg={5}>
                            <Row className=" g-4">

                                {/* Our Office */}
                                <Col md={6}>
                                    <div className="border-0 contact-info-card">
                                        <div
                                            className="text-center d-flex gap-2 flex-column justify-content-center align-items-center ">
                                            <div
                                                className="mb-3 fs-2 text-white rounded-circle border-muted border icon-circle d-flex align-items-center justify-content-center bg-accent">
                                                <i className="fa-solid fa-location-dot fs-5"></i>
                                            </div>
                                            <div className="text-center">
                                                <h5 className="text-dark">Our Office</h5>
                                                <p className="text-dark">Pune, Maharashtra, India 411021</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                {/* Email  */}
                                <Col md={6}>
                                    <div className="border-0 contact-info-card">
                                        <div
                                            className="text-center d-flex gap-2 flex-column justify-content-center align-items-center ">
                                            <div
                                                className="mb-3 fs-2 text-white rounded-circle border-muted border icon-circle d-flex align-items-center justify-content-center bg-accent">
                                                <i className="fa-solid fa-envelope fs-5"></i>
                                            </div>
                                            <div className="text-center">
                                                <h5 className="text-dark">Email</h5>
                                                <p className="text-dark">
                                                    <a href="javascript:void(0)"
                                                        className="text-decoration-none text-dark">info@safarimeet.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                {/* Phone  */}
                                <Col md={6}>
                                    <div className="border-0 contact-info-card">
                                        <div
                                            className="text-center d-flex gap-2 flex-column justify-content-center align-items-center ">
                                            <div
                                                className="mb-3 fs-2 text-white rounded-circle border-muted border icon-circle d-flex align-items-center justify-content-center bg-accent">
                                                <i className="fa-solid fa-phone fs-5"></i>
                                            </div>
                                            <div className="text-center">
                                                <h5 className="text-dark">Phone</h5>
                                                <p className="">
                                                    <a href="tel:+919876543210" className="text-decoration-none text-dark">+91
                                                        98765
                                                        43210</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                {/* Working Hours  */}
                                <Col md={6}>
                                    <div className="border-0 contact-info-card">
                                        <div
                                            className="text-center d-flex gap-2 flex-column justify-content-center align-items-center ">
                                            <div
                                                className="mb-3 fs-2 text-white rounded-circle border-muted border icon-circle d-flex align-items-center justify-content-center bg-accent">
                                                <i className="fa-solid fa-clock fs-5"></i>
                                            </div>
                                            <div className="text-center">
                                                <h5 className="text-dark">Working Hours</h5>
                                                <p className="mb-1 text-dark">Mon – Sat: 9:00 AM – 6:00 PM</p>
                                                <p className="text-danger">Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                {/* Social Links */}
                                <Col xs={12}>
                                    <div
                                        className="social-icons d-flex align-items-center gap-3 flex-wrap justify-content-center">
                                        <a href="#" className="text-decoration-none">
                                            <div
                                                className="icon border border-blue rounded-circle p-3 d-flex align-items-center justify-content-center">
                                                <i className="fa-brands fa-facebook-f fs-5 text-blue"></i>
                                            </div>
                                        </a>
                                        <a href="#" className="text-decoration-none">
                                            <div
                                                className="icon border border-blue rounded-circle p-3 d-flex align-items-center justify-content-center">
                                                <i className="fa-brands fa-instagram fs-5 text-blue"></i>
                                            </div>
                                        </a>
                                        <a href="#" className="text-decoration-none">
                                            <div
                                                className="icon border border-blue rounded-circle p-3 d-flex align-items-center justify-content-center">
                                                <i className="fa-brands fa-linkedin-in fs-5 text-blue"></i>
                                            </div>
                                        </a>
                                        <a href="#" className="text-decoration-none">
                                            <div
                                                className="icon border border-blue rounded-circle p-3 d-flex align-items-center justify-content-center">
                                                <i className="fa-brands fa-pinterest-p fs-5 text-blue"></i>
                                            </div>
                                        </a>
                                        <a href="#" className="text-decoration-none">
                                            <div
                                                className="icon border border-blue rounded-circle p-3 d-flex align-items-center justify-content-center">
                                                <i className="fa-brands fa-x-twitter fs-5 text-blue"></i>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* Top Rated Park  */}
            <section id="top-rated-park" className="my-5 contact-top-rated">
                <div className="container-lg container-inner-padding">
                    <TopRated />

                </div>
            </section>
            <Footer />

        </>
    );

}