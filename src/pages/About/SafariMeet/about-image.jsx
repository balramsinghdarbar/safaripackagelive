import lionImg from "../../../assets/images/animal-images/lion.jpg";
import Col from 'react-bootstrap/Col';
export default function aboutimage() {

    return (
        <>
           <Col md={6}>
                <img src={lionImg} alt="Safari Experience" className="img-fluid rounded-3"/>
            </Col>
        </>
    )
}