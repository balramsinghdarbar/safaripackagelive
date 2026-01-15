import Row from 'react-bootstrap/Row';
import SafarimeetCompany from './SafariMeet/safari-meet-company';
import Aboutimage from './SafariMeet/about-image';
import Aboutwhychooseus from './SafariMeet/about-why-choose-us';
import Aboutvisitorsguided from './about-visitors-guided';
export default function aboutsafarimeet() {

    return (
        <>
           <SafarimeetCompany/>
           <section id="why-choose-safari-meet" className="grey-bg">
            <div className="container py-sm-5 pt-5 pb-3">
                <Row className=" align-items-center">
                     <Aboutimage/>
                      <Aboutwhychooseus/>
                </Row>
            </div>
        </section>
        <Aboutvisitorsguided/>
        </>
    )
}