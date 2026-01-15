import { Row, Col, CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
export default function editcoverphoto() {

    return (
        <>
            {/* Shared Safari Tab  */}
            <div>
                <div className="">
                    <Card className="card mb-4 rounded-3">
                        <Card.Body className="card-body">
                            <form>
                                <Row className=" align-items-center">
                                    {/* Cover Image Label and Input  */}
                                    <Col md={12} className=" mb-3">
                                        <label htmlFor="coverImage" className="form-label fw-semibold">Cover
                                            Image</label>
                                        <input type="file" className="form-control" id="coverImage"
                                            accept="image/*" />
                                    </Col>

                                    {/* Save Button  */}
                                    <div className="text-end">
                                        <button type="reset" className="btn-reset px-4">Save</button>
                                    </div>
                                </Row>
                            </form>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </>
    );

}