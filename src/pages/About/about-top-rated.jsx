import Row from 'react-bootstrap/Row';
import TopRated from '../../Components/Comman/TopRated';
export default function abouttoprated() {

    return (
        <>
             {/* Top Rated Park  */}
        <section id="top-rated-park" className="about-rated my-sm-5 my-3">
            <div className="container-lg container-inner-padding">
                <TopRated/>
            </div>
        </section>
        </>
    )
}