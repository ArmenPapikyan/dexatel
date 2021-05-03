import React from 'react';
import {Link} from "react-router-dom";

function Banner() {
    return (
        <div className="container container-largest banner-section">
            <div className="row">
                <div className="col-md-6">
                    <div className="banner-info">
                        <div className="banner-title">
                            <h1>
                                <p className="banner-subtitle">Find Yourself in</p>
                                Our Team
                            </h1>
                        </div>
                        <div className="line"/>
                        <p className="banner-text">
                            Hello, there, I’m Rubina, the Human Resource Manager, Let’s see what we hold for your career
                            & personal growth, and how you can contribute to cloud communication & technologies with
                            your talents and skills.
                        </p>
                        <Link  to="/view-job" className="btn btn-primary large">View Jobs</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="banner-img">
                        <img src="/img/src/hr.png" alt="HR"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
