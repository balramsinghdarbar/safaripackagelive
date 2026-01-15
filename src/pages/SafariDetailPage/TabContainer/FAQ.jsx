import { Tab} from "react-bootstrap";
export default function FAQ() {

    return (
        <>
            {/* <Tab.Pane eventKey="link-7"> */}
                <div className="secion-faq mb-4 package-accordion" id="section-faq">
                    <h3 className="text-blue">FAQ's</h3>
                    <div className="accordion p-3 rounded-3 dark-grey-bg" id="faqAccordion">
                        {/* Day 1  */}
                        <div className="accordion-item mb-3 rounded-3">
                            <h2 className="accordion-header rounded-top-3" id="day1">
                                <button className="accordion-button rounded-top-3 rounded-bottom-0" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#faq1">
                                    1: What is the best time for tiger sightings?
                                </button>
                            </h2>
                            <div id="faq1" className="accordion-collapse collapse show"
                                data-bs-parent="#faqAccordion">
                                <div className="accordion-body pt-0">
                                    <ul className="list-unstyled mb-0  package-lists">
                                        <li><i className="fa-regular fa-circle-check"></i> March to June</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Day 2  */}
                        <div className="accordion-item mb-3 rounded-3">
                            <h2 className="accordion-header rounded-top-3" id="day2">
                                <button className="accordion-button rounded-top-3 rounded-bottom-0 collapsed"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                    2: What documents are required for safari booking?
                                </button>
                            </h2>
                            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body pt-0">
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
                                </div>
                            </div>
                        </div>

                        {/* Day 3  */}
                        <div className="accordion-item mb-3 rounded-3">
                            <h2 className="accordion-header rounded-top-3" id="day3">
                                <button className="accordion-button rounded-top-3 rounded-bottom-0 collapsed"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                    3: Can I customize the itinerary?
                                </button>
                            </h2>
                            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body pt-0">
                                    <ul className="list-unstyled mb-0  package-lists">
                                        <li><i className="fa-regular fa-circle-check"></i> Yes, you can
                                            customize
                                            the
                                            itinerary.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Day 4  */}
                        <div className="accordion-item mb-0 rounded-3">
                            <h2 className="accordion-header rounded-top-3" id="day4">
                                <button className="accordion-button rounded-top-3 rounded-bottom-0 collapsed"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                    4: Are kids allowed?
                                </button>
                            </h2>
                            <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body pt-0">
                                    <ul className="list-unstyled mb-0  package-lists">
                                        <li><i className="fa-regular fa-circle-check"></i> Yes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            {/* </Tab.Pane> */}
        </>
    );
}