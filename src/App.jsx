import { useState } from 'react'
import Home from './pages/Home/Home';
import SafariPackages from './pages/SafariPackages';
import SharedSafari from './pages/SharedSafari';
import ParkGuides from './pages/Park/ParkGuides';
// import ParkDetail from './pages/Park/ParkDetail/park-details';
import Species from './pages/Species/species';
import Login from './pages/auth/login'
import Profile from './pages/auth/Profile/profile';
import Editprofile from './pages/EditProfile/edit-profile';
import Createsharedtour from './pages/CreateSharedTour/create-shared-tour';
// import Detail from './pages/CreateSharedTour/detail';
import About from './pages/About/about';
import Termscondition from './pages/Terms&Conditions/terms-conditions';
import Privacypolicy from './pages/Privacy Policy/privacy-policy';
import Refundprivacypolicy from './pages/Cancellation & Refund Policy/cancellation-refund-policy';
import Faq from './pages/FAQ/faq';
import Contact from './pages/contact';
// park  Detail Sub pages
import ParkDetail from './pages/Park/ParkDetail/park-details';
import Parkoverview from './pages/Park/ParkDetail/DetailsTabs/OverView/overview';
import Parkpackages from './pages/Park/ParkDetail/DetailsTabs/packages';
import Parksharedsafaris from './pages/Park/ParkDetail/DetailsTabs/sharedsafaris';
// species Detail Sub Pages
import SpeciesDetail from './pages/Species/SpeciesDetail/species-detail';
import Packages from './pages/Species/SpeciesDetail/SpeciesTab/species-packages';
import Speciesafaris from './pages/Species/SpeciesDetail/SpeciesTab/sharedsafaris';
//Overview Sub Pages
import OverviewLayout from "./pages/Species/SpeciesDetail/SpeciesTab/Overview/overview-layout";
import Overview from "./pages/Species/SpeciesDetail/SpeciesTab/Overview/overview-layout";
import Physicalappereancehabitat from './pages/Species/SpeciesDetail/SpeciesTab/Overview/Species-subtabs/physical-appereance-habitat';
import Threats from './pages/Species/SpeciesDetail/SpeciesTab/Overview/Species-subtabs/threats';
import Interestingfacts from './pages/Species/SpeciesDetail/SpeciesTab/Overview/Species-subtabs/intresting-facts';
import Lesserknownfacts from './pages/Species/SpeciesDetail/SpeciesTab/Overview/Species-subtabs/lesser-known-facts';
import Conservationstatus from './pages/Species/SpeciesDetail/SpeciesTab/Overview/Species-subtabs/conservation-status';
import TabRouter from './pages/Species/SpeciesDetail/SpeciesTab/Overview/tab-router';
import Searchresult from './pages/Search Result/search-result';
import Registration from './pages/auth/Registration';
import AgencyRegistration from './pages/auth/Agency-registration'
import SafariDetail from './pages/SafariDetailPage/SharedSafariDetail';
import PackagesDetail from './pages/SafariDetailPage/PackagesSafariDetail';
import ForgotPassword from './pages/auth/forgotPassword';
import Verifyotp from './pages/auth/verifyOtp';
import ConfrimPassword from './pages/auth/ConfrimPassword';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/not-found'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route element={<Layout />}></Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/safari-packages" element={<SafariPackages />} />
          <Route path="/join-shared-safari" element={<SharedSafari />} />
          <Route path="/park-guides" element={<ParkGuides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/terms-conditions" element={<Termscondition />} />
          <Route path="/refund-policy" element={< Refundprivacypolicy />} />
          <Route path="/faq" element={< Faq />} />
          {/* park Detail Sub pages */}
          <Route path='/park-detail' element={<ParkDetail />} >
            <Route path="parkoverview" element={< Parkoverview />} />
            <Route path="park-package" element={<Parkpackages />} />
            <Route path="park-safari" element={<Parksharedsafaris />} />
          </Route>
         
          {/* <Route path="/species/:slug" element={<SpeciesDetail />}> */}
          <Route path="/species/:id" element={<SpeciesDetail />} >
            <Route path="overview/*" element={<OverviewLayout />}>
             <Route index element={<Navigate to="90/1" replace />} />
              {/* <Route index element={<Navigate to="overview" replace />}/> */}
               {/* <Route path="90/1" element={<Overview />} />
                <Route path="92/2" element={<Physicalappereancehabitat />} /> */}
              <Route path=":tabId/:charId" element={<TabRouter />} />
           </Route>
            <Route path="packages" element={<Packages />} />
            <Route path="species-safaris" element={<Speciesafaris />} />
          </Route>
          <Route path="/search-result" element={< Searchresult />} />
          <Route path="/species" element={<Species />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<Editprofile />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/agency-registration" element={<AgencyRegistration />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verify" element={<Verifyotp />} />
          <Route path='/safaridetail' element={<SafariDetail />} />
          <Route path='/packagesdetail' element={<PackagesDetail />} />
          <Route path='/confrimPassword' element={<ConfrimPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>

  );
}

export default App
