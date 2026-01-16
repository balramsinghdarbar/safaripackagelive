import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import DetailCarousel from '../../Components/Detail/detailCarousel';
import DetailImage from './DetailImage';
import SafariPackagesTab from './SafariPackageTabs';
import SimilarPackages from './SimilarPackages';
export default function SharedSafariDetail() {

    return (
        <>
            <div>
                <Header />
            </div>

              <DetailCarousel/>
              <DetailImage/>
              <SafariPackagesTab/>
              <SimilarPackages/>
            <Footer />

        </>
    );

}