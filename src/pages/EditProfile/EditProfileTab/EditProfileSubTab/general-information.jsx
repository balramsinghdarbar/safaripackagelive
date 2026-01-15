import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
export default function generalinformation() {

   const [gender, setGender] = useState("male"); 
   const [name , setName] = useState("");
   const [profile , setProfile] = useState("");
   const [about, setAbout] = useState("");
    return (
        <>
            <div>
                <div className="dark-grey-bg rounded-3">
                    <Row>
                        <Card  className='mb-4 rounded-3'>
                            <Card.Body>
                                <form>
                                    <Row className=" gx-2">
                                        {/* Email (Read Only)  */}
                                        <Col md={6} className="mb-3">
                                            <label className="form-label fw-semibold">Email</label>
                                            <p className="form-control-plaintext">joedoe@gmail.com
                                            </p>
                                        </Col>

                                        {/* Handle (Read Only)  */}
                                         <Col md={6} className="mb-3">
                                            <label className="form-label fw-semibold">User handle</label>
                                            <p className="form-control-plaintext">john_doe</p>
                                        </Col>

                                        {/* Name  */}
                                        <Col md={4} className=" mb-3">
                                            <label htmlFor="name" className="form-label fw-semibold">Name <span
                                                className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="name" 
                                                placeholder="John Doe" 
                                                value={name} onChange={(e) => setName(e.target.value)} required />
                                        </Col>

                                        {/*  DOB  */}
                                        <Col md={4} className="mb-3">
                                            <label htmlFor="dob" className="form-label fw-semibold">D.O.B.</label>
                                            <input type="date" className="form-control" id="dob"
                                                placeholder="mm/dd/yyyy" />
                                        </Col>

                                        {/* Gender  */}
                                        <Col md={4} className="mb-3">
                                            <label htmlFor="gender"
                                                className="form-label fw-semibold">Gender</label>
                                            <select className="form-select" id="gender" 
                                            value={gender} onChange={(e) => setGender(e.target.value)}>
                                                <option>Choose Gender</option>
                                                <option value="female">Female</option>
                                                <option value="male">Male</option>
                                                <option value="other">Other</option>
                                            </select>
                                             {/* defaultValue="male" */}
                                        </Col>
      
                                        {/* Profile Description */}
                                        <Col sm={12} className=" mb-3">
                                            <label htmlFor="profileDesc" className="form-label fw-semibold">You
                                                are</label>
                                            <textarea className="form-control" id="profileDesc" 
                                            value={profile} onChange={(e) => setProfile(e.target.value)}
                                                placeholder="Profile Description eg: Wildlife | Nature"
                                                rows="2">
                                            </textarea>
                                        </Col>
                       
                                        {/* About  */}
                                        <div className="col-12 mb-3">
                                            <label htmlFor="about" className="form-label fw-semibold">About</label>
                                            <textarea className="form-control" id="about"  
                                            value={about} onChange={(e) => setAbout(e.target.value)}
                                            placeholder="About"
                                                rows="3">
                                            </textarea>
                                        </div>

                                        {/* Social Media */}
                                        <Col sm={6} className=" mb-3">
                                            <label className="form-label fw-semibold">Facebook</label>
                                            <input type="url" className="form-control"
                                                 defaultValue="https://facebook.com/yourprofile" />
                                        </Col>

                                        <Col sm={6} className="mb-3">
                                            <label className="form-label fw-semibold">Instagram</label>
                                            <input type="url" className="form-control"
                                                defaultValue="https://instagram.com/yourprofile" />
                                        </Col>

                                        <Col sm={6} className="mb-3">
                                            <label className="form-label fw-semibold">YouTube</label>
                                            <input type="url" className="form-control"
                                                defaultValue="https://youtube.com/channel/yourchannel" />
                                        </Col>

                                        <Col sm={6} className="mb-3">
                                            <label className="form-label fw-semibold">Twitter</label>
                                            <input type="url" className="form-control"
                                                defaultValue="https://x.com/yourhandle" />
                                        </Col>
                                    </Row>

                                    {/* Save Button  */}
                                    <div className="text-end">
                                        <button type="reset" className=" btn-reset px-4">Save</button>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
            </div>
        </>
    );

}