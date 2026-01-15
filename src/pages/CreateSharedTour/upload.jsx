import { useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import { toast } from "react-toastify";
import RhinoImg from '../../assets/images/animal-images/rhino.jpg'
const Upload = ({ goToBack }) => {
    const [file, setFile] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!file) {
            toast.error("Please select a File");
            return;
        }
      

        // toast.success(' successfully Login!');
        toast.success('Your Create is Safari!');
    }


    return (
        <>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <Row className="row mb-3 align-items-start text-center text-md-start">
                        <Col xs={12} className=" mb-3">
                            <label htmlFor="uploadImg" className="form-label text-blue fw-semibold">Select Picture</label>
                            <input type="file" className="form-control" id="uploadImg"
                             name="uploadImg" value={file}  onChange={(e)=>setFile(e.target.value)} />
                        </Col>
                        <Col xs={12} className=" mb-3">
                            <label className="form-label text-blue fw-semibold">Current Display Image</label>
                            <div className="p-1">
                                <img src={RhinoImg} alt="Current Image"
                                    className="img-fluid current-display-img" />
                            </div>
                        </Col>
                        <Col xs={12} className=" mb-3">
                            <label htmlFor="safariPlan" className="form-label text-blue fw-semibold">Safari Plan <span
                                className="text-danger">*</span></label>
                            <textarea className="form-control" id="safariPlan" rows="4"
                                placeholder="Enter Plan Details" required></textarea>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end gap-2 next-prev-btns">
                        <button onClick={goToBack}
                            className="btn btn-sm border-bg blue-border-hover rounded-1 px-4 text-blue">Back</button>
                        <a href="javascript:void(0)"
                            className="btn btn-sm btn-primary blue-btn-hover border-0 rounded-1 px-4">Create</a>
                    </div>
                </form>
            </div>
          

        </>

    )
}

export default Upload;