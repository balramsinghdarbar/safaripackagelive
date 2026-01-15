import bluevectorImg from '../../../assets/images/blue-border-vector.png';

export default function safarimeetCompany() {

    return (
        <>
         
         <section id="about-safari-meet" className="my-sm-5 my-3">
            <div className="container-lg container-inner-padding">
                <div className="">
                    <div className="heading-text text-center mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">Safari Meet – Company Introduction</h2>
                            <img src={bluevectorImg} alt="Vector-Border" className="vector-border-bottom"/>
                        </div>
                    </div>
                    <div className="section-text">
                        <p>Big Cats India is a premium wildlife tour agency for nature and wildlife lovers of the world.
                        </p>
                        <p className="mb-sm-3 mb-0">We are specialized in Tiger Safari Tours, Black Panther Tour, Bespoke Safaris, & Luxury
                            Safaris in National Parks and Tiger Reserves of India.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}