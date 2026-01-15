import { Tab} from "react-bootstrap";
export default function ThingsCarry() {

    return (
        <>
            {/* <Tab.Pane eventKey="link-6"> */}
                <div className="section-thing-to-carry p-3 rounded-3 dark-grey-bg mb-4" id="section-thing-to-carry">
                    <div className="bg-white px-4 py-3 rounded-3">
                        <h3 className="text-blue">Things to Carry</h3>
                        <ul className="list-unstyled mb-0  package-lists ps-3">
                            <li className="mb-2">
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <b>Neutral-colored clothes</b> (olive, beige, brown, green) – bright colors
                                disturb wildlife
                            </li>

                            <li className="mb-2">
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <b> Cap or hat </b> – for sun protection during open jeep safaris
                            </li>

                            <li className="mb-2">
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <b>Sunglasses </b> – to protect your eyes from glare
                            </li>

                            <li className="mb-2">
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <b>Light jacket or fleece</b> – especially for morning safaris (it gets
                                chilly
                                even in warmer months)


                            </li>
                            <li className="mb-2">
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <b>Comfortable walking shoes</b> – essential for any short walks or
                                exploration
                            </li>
                        </ul>
                    </div>
                </div>
            {/* </Tab.Pane> */}
        </>
    );
}