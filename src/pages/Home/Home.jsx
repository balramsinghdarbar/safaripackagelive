// import React, { useEffect,useState } from "react";
// import api from "../../api/api";
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import Banner from '../Home/Banner';
import JoinSharedSafari from '../Home/joinSharedSafari';
import TopSafariParks from '../Home/TopSafariParks'
import Choose from '../Home/whyChooseUs/whyChooseus';
import SafariDeals from '../Home/SafariDeals';
import GuestSay from './GuestSay';
import RecentBlogHome from './recent-blog';
import TopSpecies from './TopSpecies';

const Home = () => {

//  const [data, setData] = useState([]);

// useEffect(() => {
//   api.get("/postman-data")
//     .then(res => {
//       console.log(res.data); // check data
//       setData(res.data)
//     })
//     .catch(err => console.error(err));
// }, []);
// console.log(import.meta.env.VITE_API_BASE_URL);
  return (
    <div>
      <Header />
      <div>
        <Banner  />
      </div>
      <JoinSharedSafari  />

      <TopSafariParks  />
      
      <Choose />

      <SafariDeals />

      <GuestSay />
      <RecentBlogHome />

      <TopSpecies />


      <Footer />

    </div>

  );
}
export default Home;