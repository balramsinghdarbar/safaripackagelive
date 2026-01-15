import { Tab} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
export default function Itinerary() {

    return (
        <>

            {/* TAB — Itinerary */}
            {/* <Tab.Pane eventKey="link-1"> */}
                <div className="secion-itinerary package-accordion mb-4" >
                    <h3 className="text-blue">Itinerary</h3>
                    <Accordion defaultActiveKey="1" className="p-3 rounded-3 dark-grey-bg">
                        <Accordion.Item eventKey="1" className="mb-3 rounded-3">
                            <Accordion.Header className="rounded-top-3">Day 1: Arrival at Sawai Madhopur & Check-in</Accordion.Header>
                            <Accordion.Body className="pt-0">
                                <ul className="list-unstyled mb-0  package-lists">
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Early
                                        morning jeep safari in core zone
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Return for
                                        breakfast & relax
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Lunch at the lodge
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Afternoon
                                        safari in a different  zone
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Dinner & overnight stay
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="mb-3 rounded-3">
                            <Accordion.Header className="rounded-top-3"> Day 2: Morning & Afternoon Safari</Accordion.Header>
                            <Accordion.Body className="pt-0">
                                <ul className="list-unstyled mb-0  package-lists">
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Early morning
                                        jeep safari in core zone
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Return for breakfast
                                        & relax
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Lunch at the lodge
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Afternoon safari
                                        in a different zone
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Dinner & overnight
                                        stay
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="mb-3 rounded-3">
                            <Accordion.Header className="rounded-top-3">  Day 3: Optional Safari + Local Sightseeing</Accordion.Header>
                            <Accordion.Body className="pt-0">
                                <ul className="list-unstyled mb-0  package-lists">
                                    <li className="mb-2"><i className="fa-regular fa-circle-check"></i> Early
                                        morning
                                        jeep
                                        safari in core
                                        zone</li>
                                    <li className="mb-2"><i className="fa-regular fa-circle-check"></i> Return for
                                        breakfast
                                        & relax</li>
                                    <li className="mb-2"><i className="fa-regular fa-circle-check"></i> Lunch at the
                                        lodge
                                    </li>
                                    <li className="mb-2"><i className="fa-regular fa-circle-check"></i> Afternoon
                                        safari
                                        in
                                        a different
                                        zone
                                    </li>
                                    <li className="mb-2"><i className="fa-regular fa-circle-check"></i> Dinner &
                                        overnight
                                        stay
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item >

                        <Accordion.Item eventKey="4" className="mb-3 rounded-3">
                            <Accordion.Header className="rounded-top-3">  Day 4: Check-out & Departure</Accordion.Header>
                            <Accordion.Body className="pt-0">
                                <ul className="list-unstyled mb-0  package-lists">
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Early morning
                                        jeep safari in core zone
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Return for
                                        breakfast & relax
                                    </li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Lunch at the lodge
                                    </li>
                                    <li className="mb-2"><i className="fa-regular fa-circle-check"></i> Afternoon
                                        safari in a different zone</li>
                                    <li className="mb-2">
                                        <i className="fa-regular fa-circle-check"></i> Dinner & overnight
                                        stay
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>

            {/* </Tab.Pane> */}
        </>
    );
}