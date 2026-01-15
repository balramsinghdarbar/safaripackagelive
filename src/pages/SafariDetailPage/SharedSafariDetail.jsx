import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import DetailCarousel from '../../Components/Detail/detailCarousel';
import '../../css/style.css';
import '../../css/responsive.css';
import '../../css/full-forms.css';
import '../../css/all-form.css';
import '../../css/listingpages.css';
import '../../css/package-listing-detail.css';
import DetailImage from './Detailimage';
import SafariPackagesTab from './SafariPackageTabs';
import SimilarPackages from './SimilarPackages'
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