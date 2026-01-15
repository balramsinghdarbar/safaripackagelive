import { useState } from 'react';
import { Row, Col, CardBody } from 'react-bootstrap';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const basicinfo = ({ goToNext }) => {
  
    const [title, setTitle]= useState("");
    const [park, setPark] = useState("");
    const [startdate,setStartDate] = useState("");
    const [enddate,setEndDate] = useState("");
    const [numbersafaris,setNumberSafaris] = useState("");

     function handleSubmit(e) {
             e.preventDefault();
                 
    
            if (!title) {
            
               toast.error("Title is Required!");
            return;
            } 
            if (!park) {
                toast.error("Please select a Park!");
                return;
            }
            if (!startdate) {
                toast.error("Start Date is Required!");
                return;
            }
            if (!enddate) {
                toast.error("End Date is Required!");
                return;
            }
             if (!numbersafaris) {
                toast.error("NumberSafaris is Required!");
                return;
            }
            
            toast.success('Your Information is Correct!');
            goToNext();
        }
//  const navigate = useNavigate();

    return (
        <>
            <Col md={6}>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={12} className=" mb-3">
                            <label htmlFor="title" className="form-label text-blue">Title <span
                                className="text-danger">*</span></label>
                            <input type="text" className="form-control rounded-3" id="title" name="title"
                                value={title} onChange={(e) =>setTitle(e.target.value)}/>
                        </Col>
                        <Col xs={12} className=" mb-3">
                            <label htmlFor="safari-park" className="form-label text-blue">Select a Safari Park <span
                                className="text-danger">*</span></label>
                            <select className="form-select rounded-3" id="safari-park" name="safari_park"
                                value={park} onChange={(e) =>setPark(e.target.value)}>
                                <option value="">Select a Safari Park</option>
                                <option value="kanha">Kanha Tiger Reserve</option>
                                <option value="tadoba">Tadoba Tiger Reserve</option>
                            </select>
                        </Col>
                        <Col md={6} className=" mb-3">
                            <label htmlFor="start-date" className="form-label text-blue">Start Date <span
                                className="text-danger">*</span></label>
                            <input type="date" className="form-control rounded-3" id="start-date"
                                name="start_date" value={startdate} onChange={(e)=> setStartDate(e.target.value)}/>
                        </Col>
                        <Col md={6} className=" mb-3">
                            <label htmlFor="end-date" className="form-label text-blue">End Date <span
                                className="text-danger">*</span></label>
                            <input type="date" className="form-control rounded-3" id="end-date"
                                name="end_date" value={enddate} onChange={(e)=>setEndDate(e.target.value)} />
                        </Col>
                        <Col xs={12} className=" mb-3">
                            <label htmlFor="safari-count" className="form-label text-blue">Number of Safaris <span
                                className="text-danger">*</span></label>
                            <input type="number" min="1" className="form-control rounded-3"
                                id="safari-count" name="safari_count" 
                                value={numbersafaris} onChange={(e)=>setNumberSafaris(e.target.value)}/>
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end gap-2 next-prev-btns">
                        <a href="javascript:void(0)"
                            className="btn btn-sm border-bg blue-border-hover rounded-1 px-3 text-blue fw-semibold">Cancel</a>
                        <button 
                            className="btn btn-sm btn-primary blue-btn-hover border-0 rounded-1 px-4">Next</button>
                    </div>
                </form>
            </Col>
        </>

    )
}
export default basicinfo;