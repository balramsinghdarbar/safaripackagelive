import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import tigerdarkImg from '../../assets/images/animal-images/sitting-tiger-dark.png';
export default function nationalparkresult() {

    const topSafari = [];

    for (let i = 0; i < 4; i++) {
        topSafari.push(
          
            <Card className=" search-card rounded-3" key={i}>
                <div className="card-img-top p-2 rounded-3">
                    <img src={tigerdarkImg} alt="" className="img-fluid rounded-3" />
                </div>
                <Card.Body className=" p-2 pt-0">
                    <Card.Title >
                        <small className="small-text lh-1">
                            May 22, 2019
                        </small>
                        <div className="mb-0 mt-2 search_card">
                            10 Must visit National Parks of India for all wildlife lovers
                        </div>
                    </Card.Title>

                    <div className="card-text mb-1">
                        <p className="mb-3">India is a diverse country endowed with rich and unique species of
                            flora
                            and fauna. This vivid variation of the...</p>
                        <a href="javascript:void(0)"
                            className="text-decoration-none btn btn-sm blue-btn-hover btn-primary border-0 d-block rounded-1">
                            View More
                        </a>
                    </div>
                </Card.Body>
            </Card>
           

        );
    }
    return (
        <>
            <section id="search-section">
                <div className="container-lg container-inner-padding">
                    <Row className="g-3 position-relative mb-sm-5 mb-4">
                        <Col sm={12} className=" text-center my-3">
                            <h3 className="text-blue mb-0">20 Results found for 'National Parks'</h3>
                        </Col>
                       
                        {topSafari.map((item, index) => (
                             <Col xl={3} md={4} sm={6} key={index}>
                                    {item}
                             </Col>
                            
                        ))}
                      

                        <Col sm={12} className="text-center mt-4 pt-2">
                            <a href="javascript:void(0)" className="text-decoration-none btn-primary blue-btn-hover btn btn-sm border-0 px-3">
                                Load More
                            </a>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );

}