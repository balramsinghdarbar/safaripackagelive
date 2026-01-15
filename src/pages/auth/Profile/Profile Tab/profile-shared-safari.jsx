import SafariCard from '../../../../Components/Comman/SafariCard';
export default function profilesharedsafari() {
    // const [activeTab, setActiveTab] = useState("");

    return (
        <>
            {/* Shared Safari Tab */}
            <div className="">
                <div className="card mb-3 rounded-3">
                    <div className="card-body">
                        {/* About  */}
                        <div className="row">
                            <div className="col-12">
                                <h3 className="mb-0">1 Shared Safari Organized by me</h3>
                            </div>
                            <div className="col-sm-6 join-safari-card-box mt-3 rounded-3">
                                <SafariCard />
                            </div>
                            <div className="col-12 d-none">
                                <h3 className="mb-0">No Safari Organized</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 rounded-3">
                    <div className="card-body">
                        {/* About  */}
                        <div className="row">
                            <div className="col-12">
                                <h3 className="mb-0">1 Shared Safari Organized by me</h3>
                            </div>
                            <div className="col-sm-6 join-safari-card-box mt-3 rounded-3">
                                <SafariCard />
                            </div>
                            <div className="col-12 d-none">
                                <h3 className="mb-0">No Safari Organized</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
