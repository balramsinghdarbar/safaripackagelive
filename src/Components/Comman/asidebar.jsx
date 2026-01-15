import React from 'react';
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function Parkaside() {
    const [brand, setBrand] = useState("");
    
    return (
        <>

            {/* Sidebar Filter  */}
            <aside className="col-12 col-lg-4 col-xl-3">

                <div className="filter-sidebar-wrapper filter-sidebar-wrapper-park border-0 mb-xl-0 mb-3">
                    <div className="quote-form">
                        {/* Safari Quote Request Box */}
                        <div className="card py-4 px-lg-3 px-sm-4 px-3 rounded-3 shadow-sm border-muted">
                            <h3 className="fw-bold text-blue text-center mb-3">
                                Get Free Quotes
                            </h3>
                            <form>
                                {/* Safaris & Travelers  */}
                                <Row className=" gx-3">
                                    <Col lg={12} sm={6} className=" mb-3">
                                        <label className="form-label mb-1">Safaris</label>
                                        <input type="number" className="form-control" />
                                    </Col>
                                    <Col lg={12} sm={6} className=" mb-3">
                                        <label className="form-label mb-1">Travellers</label>
                                        <input type="number" className="form-control" />
                                    </Col>
                                </Row>
                                {/* Accommodation  */}
                                <div className="mb-3">
                                    <label className="form-label mb-1">Accommodation</label>
                                    <select className="form-select" defaultValue={Budget} value={brand} onChange={(e) => setBrand(e.target.value)}>
                                        {/* <option >Select...</option> */}
                                        <option value="Budget">Budget</option>
                                        <option value="Mid-range">Mid-range</option>
                                        <option value="luxury">Luxury</option>
                                    </select>
                                </div>
                                {/* Dates  */}
                                <Row className=" gx-3">
                                    <Col lg={12} sm={6} className=" mb-3">
                                        <label className="form-label mb-1">Start Date</label>
                                        <input type="date" className="form-control" />
                                    </Col>
                                    <Col lg={12} sm={6} className=" mb-3">
                                        <label className="form-label mb-1">End Date</label>
                                        <input type="date" className="form-control" />
                                    </Col>
                                </Row>
                                {/* Submit Button  */}
                                <div>
                                    <button type="submit"
                                        className="blue blue-btn-hover rounded-pill w-100 text-white">Send
                                        Request</button>
                                </div>
                                {/* Note  */}
                                <p className="small mt-2 mb-0 text-center text-dark">
                                    *We'll share your request with all operators in the park and send you
                                    their quotes.
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    );

}