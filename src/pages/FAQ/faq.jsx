import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import CommanBanner from '../../Components/Comman/CommanBanner';
import Accordion from 'react-bootstrap/Accordion';
export default function faq() {
    
    
    return (
        <>
          <Header/>
         <CommanBanner/>
           <div className="container-lg container-inner-padding">
            <div className="secion-faq mb-4 package-accordion" id="section-faq">
                 <Accordion className="all-accordion p-3 rounded-3 dark-grey-bg row" id="faqAccordion">
                     {/* Day 1  */}
                      <Accordion.Item eventKey="1" className='mb-3 rounded-top-3 col-sm-6 border-0'>
                         <Accordion.Header className="rounded-top-3"> 1: What is the best time for tiger sightings?</Accordion.Header>
                        <Accordion.Body className='pt-0'>
                            <ul className="list-unstyled mb-0  package-lists">
                                <li><i className="fa-regular fa-circle-check"></i> March to June</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* Day 2  */}
                     <Accordion.Item eventKey="2" className='mb-3 rounded-top-3 col-sm-6 border-0'>
                        <Accordion.Header className="rounded-top-3"> 2: What documents are required for safari booking?</Accordion.Header>
                        <Accordion.Body className='pt-0'>
                            <ul className="list-unstyled mb-0  package-lists">
                                    <li><i className="fa-regular fa-circle-check"></i> Identification
                                        documents
                                        such
                                        as
                                        a government-issued ID (Aadhaar card, Voter ID, Driving License,
                                        PAN
                                        card,
                                        or Passport for foreigners) and details like your name, age,
                                        nationality,
                                        and gender. </li>
                                </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                     {/* Day 3  */}
                     <Accordion.Item eventKey="3" className='mb-3 rounded-top-3 col-sm-6 border-0'>
                    <Accordion.Header className="rounded-top-3">  3: Can I customize the itinerary?</Accordion.Header>
                         <Accordion.Body className='pt-0'>
                            <ul className="list-unstyled mb-0  package-lists">
                                    <li><i className="fa-regular fa-circle-check"></i> Yes, you can
                                        customize
                                        the
                                        itinerary.</li>
                                </ul>
                         </Accordion.Body>
                    </Accordion.Item>
                     {/* Day 4  */}
                     <Accordion.Item eventKey="4" className='mb-3 rounded-top-3 col-sm-6 border-0'>
                        <Accordion.Header className="rounded-top-3"> 4: Are kids allowed?</Accordion.Header>
                          <Accordion.Body className='pt-0'>
                               <ul className="list-unstyled mb-0  package-lists">
                                    <li><i className="fa-regular fa-circle-check"></i> Yes</li>
                                </ul>
                          </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>
        </div>
          <Footer/>
        </>
    );

}