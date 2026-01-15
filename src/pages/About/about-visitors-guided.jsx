import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
export default function aboutvisitorsguided() {

    return (
        <>
            <section className="py-sm-5 pt-4 pb-3 bg-white text-white">
            <Container>
                <Row className=" text-center justify-content-center">

                     {/* Visitors Guided  */}
                    <Col md={3} sm={6} className=" mb-md-2 mb-4">
                        <h2 className="fw-bold display-6 text-blue">15,000+</h2>
                        <p className="text-uppercase small text-blue">Happy Explorers</p>
                        <div className="underline mx-auto mt-2"></div>
                    </Col>

                     {/* Safaris Conducted  */}
                    <Col md={3} sm={6} className=" mb-md-2 mb-4">
                        <h2 className="fw-bold display-6 text-blue">1200+</h2>
                        <p className="text-uppercase small text-blue">Tiger Safaris Conducted</p>
                        <div className="underline mx-auto mt-2"></div>
                    </Col>

                     {/* Parks Covered  */}
                    <Col md={3} sm={6} className=" mb-md-2 mb-4">
                        <h2 className="fw-bold display-6 text-blue">18+</h2>
                        <p className="text-uppercase small text-blue">National Parks Explored</p>
                        <div className="underline mx-auto mt-2"></div>
                   </Col>

                    {/* Fleet Size  */}
                    <Col md={3} sm={6} className=" mb-md-2 mb-4">
                        <h2 className="fw-bold display-6 text-blue">25+</h2>
                        <p className="text-uppercase small text-blue">Safari Vehicles</p>
                        <div className="underline mx-auto mt-2"></div>
                    </Col>

                </Row>
            </Container>
        </section>
        </>
    )
}