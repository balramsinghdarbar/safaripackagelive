
import Col from 'react-bootstrap/Col';
export default function aboutwhychooseus() {

    return (
        <>
            <Col md={6} className=" ps-md-5 mt-4 mt-md-0">
                <h2 className="text-blue mb-4">Why Choose Us?</h2>
                <ul className="list-unstyled">
                    <li className="mb-3">
                        <i className="fa-solid fa-paw me-1"></i> <strong>Expert Team:</strong> Skilled guides ensure
                        a safe and enriching safari.
                    </li>
                    <li className="mb-3">
                        <i className="fa-solid fa-paw me-1"></i> <strong>Responsible Tourism:</strong>We practice
                        responsible, wildlife-friendly tourism.
                    </li>
                    <li className="mb-3">
                        <i className="fa-solid fa-paw me-1"></i> <strong>Tailored Safaris:</strong> Safaris tailored
                        to your interests and schedule.
                    </li>
                    <li className="mb-3">
                        <i className="fa-solid fa-paw me-1"></i> <strong>Ethical & Safe:</strong> Strictly follow
                        forest rules and safety standards.
                    </li>
                    <li className="mb-3">
                        <i className="fa-solid fa-paw me-1"></i> <strong>Quality Stays:</strong> Partnered with
                        premium lodges for comfort and quality.
                    </li>
                </ul>
            </Col>
        </>
    )
}