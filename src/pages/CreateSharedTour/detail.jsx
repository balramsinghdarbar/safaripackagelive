import { useState } from 'react';
import { Row, Col, CardBody } from 'react-bootstrap';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Detail = ({ goToBack, goToNext }) => {
    //  const navigate = useNavigate();
    const [theme, setTheme] = useState("");
    const [category, setCategory] = useState("Select a Safari Park");
    const [minprice, setMinPrice] = useState("");
    const [maxprice, setMaxPrice] = useState("");
    const [totalseats, setTotalSeat] = useState("");
    const [shareseats,setShareSeat] = useState("");
    // navigate('/basic-info');
    function handleSubmit(e) {
        e.preventDefault();
          
        if (!theme) {
            toast.error("Please select a Theme");
            return;
        }
        if (!category) {
            toast.error("Please select a Category!");
            return;
        }
        if (!minprice) {
            toast.error("Min Price is Required!");
            return;
        }
        if (!maxprice) {
            toast.error("Max Price is Required!");
            return;
        }
        if (!totalseats) {
            toast.error("Total Seats is Required!");
            return;
        }
        if (!shareseats) {
            toast.error("Share Seats is Required!");
            return;
        }

        // toast.success(' successfully Login!');
        toast.success('Your Information is Correct!');
        goToNext();
    }
   

    return (
        <>
            <Col md={6}>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={12} className=" mb-3">
                            <label htmlFor="theme" className="form-label text-blue">Select Theme<span
                                className="text-danger">*</span></label>
                            <select
                                className="form-select rounded-3"
                                name="theme"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}>
                                <option value="">Select Theme</option>
                                <option value="kanha">Photography</option>
                                <option value="tadoba">Safari Experience</option>
                            </select>
                        </Col>
                        <Col xs={12} className=" mb-3">
                            <label htmlFor="included" className="form-label text-blue">Select a Category <span
                                className="text-danger">*</span></label>
                            <select className="form-select rounded-3" id="included" name="included"
                                value={category} onChange={(e)=>setCategory(e.target.value)}>
                                <option value="" >Select a Safari Park</option>
                                <option value="premium">Premium</option>
                                <option value="standard">Standard</option>
                                <option value="economical">Economical</option>
                                <option value="not-include">Not Include</option>
                                <option value="forest-rest-house">Forest Rest House</option>
                                <option value="home-stay">Home Stay</option>
                            </select>
                        </Col>
                        <Col xs={12} className=" mb-3">
                            <label className="form-label fw-semibold text-dark-emphasis">
                                Price Per Person (INR) <span className="text-danger">*</span>
                            </label>
                            <div className="d-flex align-items-center gap-2">
                                <input type="number" className="form-control" placeholder="Min"
                                    name="price_min" min="0" value={minprice} onChange={(e)=>setMinPrice(e.target.value)}/>
                                <span>-</span>
                                <input type="number" className="form-control" placeholder="Max"
                                    name="price_max" min="0"  value={maxprice} onChange={(e)=>setMaxPrice(e.target.value)} />
                            </div>
                        </Col>
                        <Col md={6} className=" mb-3">
                            <label htmlFor="total-seats" className="form-label text-blue">Total Seats<span
                                className="text-danger">*</span></label>
                            <input type="number" min="1" className="form-control rounded-3" id="total-seats"
                                name="total-seats" value={totalseats} onChange={(e)=>setTotalSeat(e.target.value)} />
                        </Col>
                        <Col md={6} className=" mb-3">
                            <label htmlFor="share-seats" className="form-label text-blue">Share Seats<span
                                className="text-danger">*</span></label>
                            <input type="number" min="1" className="form-control rounded-3" id="share-seats"
                                name="share-seats" value={shareseats} onChange={(e)=>setShareSeat(e.target.value)} />
                        </Col>

                        <div className="d-flex justify-content-end gap-2 next-prev-btns">
                            <button onClick={goToBack}
                                className="btn btn-sm border-bg blue-border-hover rounded-1 px-4 text-blue">Back</button>
                            <button  
                                className="btn btn-sm btn-primary blue-btn-hover border-0 rounded-1 px-4">Next</button>
                        </div>
                    </Row>
                </form>
            </Col>
           
        </>

    )
}

export default Detail;