import animalTigerImg from '../../assets/images/animal-images/tiger.png';
import bluebordervectorImg from '../../assets/images/blue-border-vector.png';
import blogImg1 from '../../assets/images/animal-images/blog-1.png';
import blogImg2 from '../../assets/images/animal-images/blog-2.png';
import blogImg3 from '../../assets/images/animal-images/blog-3.png';
export default function RecentBlogHome() {
    
     

    return (
        <>
            {/* Recent Blogs   */}
            <section id="recent-blogs" className="grey-bg mb-md-5 mb-3 py-xl-5 py-4">
                <div className="container-lg container-inner-padding">
                    <div className="heading-text text-center flex-wrap mb-xl-4 mb-3">
                        <div className="">
                            <h2 className="mb-0 text-accent">Recent Blogs</h2>
                            <img src={bluebordervectorImg} alt="Vector-Border" className="vector-border-bottom"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <a href="javascript:void(0)" className="text-decoration-none">
                                <div className="card rounded-3 h-100">
                                    {/* Card Image  */}
                                    <img className="card-img-top rounded-top-3" src={blogImg1}
                                alt="Blog 1 image"/>
                                    {/* Card Body  */}
                                    <div className="card-body bg-white rounded-3 p-2">
                                        <h3 className="card-title text-dark mb-0">
                                            Top tiger reserves and wildlife sanctuaries near Nagpur for Tiger Safari
                                        </h3>
                                        <p className="text-muted mb-0">
                                            Nagpur is said to be the tiger capital of India, That’s because there is a wide
                                            range of
                                            forest areas, national parks, wildlife sanctuaries and tiger reserve within 200 km
                                            range
                                            of Nagpur and most of them are famous for the Big Cats sighting in...
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <a href="javascript:void(0)" className="text-decoration-none">
                                        <div className="card mb-md-4 mb-3 border rounded-3">
                                            <div className="card-body p-0">
                                                <div className="d-flex align-items-center">
                                                    <img src={blogImg2}
                                                className="img-fluid rounded-start-3 recent-blogs-mobile"
                                                alt="Blog 2 image"/>
                                                    <div className="p-2">

                                                        <h3 className="card-title text-dark mb-2">
                                                            10 Endangered Wildlife Species in India That Must be Saved
                                                        </h3>
                                                        <p className="text-muted mb-0">
                                                            Endangered wildlife species in India The land of India is home to
                                                            numerous species of flora and fauna. Some of them are endangered and
                                                            some are critically endangered wildlife species. The shelter to a
                                                            wide
                                                            range of wild animals is one of the most...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-12">
                                    <a href="javascript:void(0)" className="text-decoration-none">
                                        <div className="card mb-md-4 mb-3 border rounded-3">
                                            <div className="card-body p-0">
                                                <div className="d-flex align-items-center">
                                                    <img src={blogImg3}
                                                className="img-fluid rounded-start-3 recent-blogs-mobile"
                                                alt="Blog 3 image"/>
                                                    <div className="p-2">

                                                        <h3 className="card-title text-dark mb-2">
                                                            10 Endangered Wildlife Species in India That Must be Saved
                                                        </h3>
                                                        <p className="text-muted mb-0">
                                                            Endangered wildlife species in India The land of India is home to
                                                            numerous species of flora and fauna. Some of them are endangered and
                                                            some are critically endangered wildlife species. The shelter to a
                                                            wide
                                                            range of wild animals is one of the most...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="text-center">
                                <a href="javascript:void(0)"
                                    className=" btn-sm btn btn-primary blue-btn-hover border-0 rounded-1 px-4 rounded-1"
                                    >View
                                    All Blogs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}