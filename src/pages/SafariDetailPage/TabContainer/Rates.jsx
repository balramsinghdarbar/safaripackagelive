import { Tab} from "react-bootstrap";
export default function Rates() {

    return (
        <>
            {/* <Tab.Pane eventKey="link-5"> */}
                <div className="section-rates p-3 rounded-3 dark-grey-bg mb-4" id="section-rates">
                    <h3 className="text-blue mb-3">Rates:</h3>
                    <div className="table-responsive mb-md-0 mb-3">
                        <table className="custom-table" cellSpacing="10px" id="bestTimeToVisit">
                            {/* First Header Row  */}
                            <tbody>
                                <tr>
                                    <td colSpan="3" className="table-header p-3 bg-white border-1">
                                        <h3 className="text-blue fw-semibold m-0">Rates Info Per Person

                                        </h3>
                                    </td>
                                </tr>

                                {/* Second Header Row  */}
                                <tr className="table-header p-2">
                                    <td className="p-3 bg-white border-1 fw-bold">Safari Type</td>
                                    <td className="p-3 bg-white border-1 fw-bold">1 Person</td>
                                    <td className="p-3 bg-white border-1 fw-bold">6 Person</td>
                                </tr>

                                {/* Row 1  */}
                                <tr>
                                    <td className="p-3 bg-white border-1 fw-normal">Canter Safari</td>
                                    <td className="p-3 bg-white border-1 fw-normal">Rs. 600</td>
                                    <td className="p-3 bg-white border-1 fw-normal">Rs. 3000</td>
                                </tr>

                                {/* Row 2  */}
                                <tr>
                                    <td className="p-3 bg-white border-1 fw-normal">Jeep Safari</td>
                                    <td className="p-3 bg-white border-1 fw-normal">Rs. 600</td>
                                    <td className="p-3 bg-white border-1 fw-normal">Rs. 3000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            {/* </Tab.Pane> */}
        </>
    );
}