import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';
import CommanBanner from '../../Components/Comman/CommanBanner';
import Searchrated from './search-rated';
import Nationalparkresult from './national-park-result';
export default function searchresult() {
    
    
    return (
        <>
          <Header/>
         <CommanBanner/>
         <Nationalparkresult/>
         <Searchrated/>
          <Footer/>
        </>
    );

}