import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../../Components/Layout/Header';
import Footer from '../../../Components/Layout/Footer';
import Parkbanner from '../../../Components/Comman/park-banner';;
import Parkasidetabs from '../ParkDetail/DetailsTabs/park-subtabs';
export default function parkDetail() {

    return (
        <>
            <div>
                <Header />
            </div>
           <Parkbanner/>
            <Parkasidetabs/>
            <Footer />

        </>
    );

}