import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import Banner from '../Home/Banner';
import JoinSharedSafari from '../Home/joinSharedSafari';
import TopSafariParks from '../Home/TopSafariParks'
import TopSpecies from './TopSpecies';

const Home = () => {

  return (
    <div>
      <Header />

        <Banner  />

      <JoinSharedSafari  />

      <TopSafariParks  />
    
      <TopSpecies />

      <Footer />

    </div>

  );
}
export default Home;