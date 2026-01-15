import bluevectorImg from '../../../../../../assets/images/blue-border-vector.png';
import wildlifeImg1 from '../../../../../../assets/images/wildlife/wildlife-1.jpg';
import wildlifeImg2 from '../../../../../../assets/images/wildlife/wildlife-2.jpg';
import wildlifeImg3 from '../../../../../../assets/images/wildlife/wildlife-3.jpg';
import wildlifeImg4 from '../../../../../../assets/images/wildlife/wildlife-4.jpg';
import wildlifeImg5 from '../../../../../../assets/images/wildlife/wildlife-5.jpg';
import wildlifeImg6 from '../../../../../../assets/images/wildlife/wildlife-6.jpg';
export default function wildlifeyoumaysee() {

    return (
        <>
            <div>
                <div className="heading-text text-center mb-xl-4 mb-3">
                    <div className="">
                        <h2 className="mb-0 text-accent">Wildlife You May See !!!</h2>
                        <img src={bluevectorImg} alt="Vector-Border"
                            className="vector-border-bottom" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <a href="javascript:void" className="text-decoration-none fw-bold">
                            <div className="wildlife-img">
                                <img src={wildlifeImg1} alt="Wildlife 1"
                                    className="img-fluid" />
                                <div className="wildlife-text text-center px-4">
                                    <h6>Bengal Tigers</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <a href="javascript:void" className="text-decoration-none fw-bold">
                            <div className="wildlife-img">
                                <img src={wildlifeImg2} alt="Wildlife 2"
                                    className="img-fluid" />
                                <div className="wildlife-text text-center px-4">
                                    <h6>Leopard</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <a href="javascript:void" className="text-decoration-none fw-bold">
                            <div className="wildlife-img">
                                <img src={wildlifeImg3} alt="Wildlife 3"
                                    className="img-fluid" />
                                <div className="wildlife-text text-center px-4">
                                    <h6>Chital</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <a href="javascript:void" className="text-decoration-none fw-bold">
                            <div className="wildlife-img">
                                <img src={wildlifeImg4} alt="Wildlife 4"
                                    className="img-fluid" />
                                <div className="wildlife-text text-center px-4">
                                    <h6>Sambar</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <a href="javascript:void" className="text-decoration-none fw-bold">
                            <div className="wildlife-img">
                                <img src={wildlifeImg5} alt="Wildlife 5"
                                    className="img-fluid" />
                                <div className="wildlife-text text-center px-4">
                                    <h6>Jackal</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <a href="javascript:void" className="text-decoration-none fw-bold">
                            <div className="wildlife-img">
                                <img src={wildlifeImg6} alt="Wildlife 6"
                                    className="img-fluid" />
                                <div className="wildlife-text text-center px-4">
                                    <h6>Langur</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}