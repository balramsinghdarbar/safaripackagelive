import { Tab} from "react-bootstrap";
export default function Exclusions() {

    return (
        <>
            {/* <Tab.Pane eventKey="link-3"> */}
                <div className="section-exclusions p-3 rounded-3 dark-grey-bg mb-4" id="section-exclusions">
                    <div className="bg-white px-4 py-3 rounded-3">
                        <h3 className="text-blue">Exclusions</h3>
                        <ul className="list-unstyled mb-0  package-lists ps-3">
                            <li className="mb-2">
                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#333333">
                                    <path
                                        d="M240-200q-50 0-85-35t-35-85H40v-360q0-33 23.5-56.5T120-760h560l240 240v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm360-360h160L640-680h-40v120Zm-240 0h160v-120H360v120Zm-240 0h160v-120H120v120Zm120 290q21 0 35.5-14.5T290-320q0-21-14.5-35.5T240-370q-21 0-35.5 14.5T190-320q0 21 14.5 35.5T240-270Zm480 0q21 0 35.5-14.5T770-320q0-21-14.5-35.5T720-370q-21 0-35.5 14.5T670-320q0 21 14.5 35.5T720-270ZM120-400h32q17-18 39-29t49-11q27 0 49 11t39 29h304q17-18 39-29t49-11q27 0 49 11t39 29h32v-80H120v80Zm720-80H120h720Z" />
                                </svg>
                                Travel Insurance
                            </li>

                            <li className="mb-2">
                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#333333">
                                    <path
                                        d="M280-80v-100l120-84v-144L80-280v-120l320-224v-176q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l320 224v120L560-408v144l120 84v100l-200-60-200 60Z" />
                                </svg>
                                Any Airfare, Any Still OR Video Camera fee
                            </li>

                            <li className="mb-2">
                                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#333333">
                                    <path
                                        d="M336-120q-91 0-153.5-62.5T120-336q0-38 13-74t37-65l142-171-97-194h530l-97 194 142 171q24 29 37 65t13 74q0 91-63 153.5T624-120H336Zm144-200q-33 0-56.5-23.5T400-400q0-33 23.5-56.5T480-480q33 0 56.5 23.5T560-400q0 33-23.5 56.5T480-320Zm-95-360h190l40-80H345l40 80Zm-49 480h288q57 0 96.5-39.5T760-336q0-24-8.5-46.5T728-423L581-600H380L232-424q-15 18-23.5 41t-8.5 47q0 57 39.5 96.5T336-200Z" />
                                </svg>
                                Expenses of personal nature such as laundry, telephone calls, drinks, tipping
                                etc
                            </li>
                        </ul>
                    </div>
                </div>
            {/* </Tab.Pane> */}
        </>
    );
}