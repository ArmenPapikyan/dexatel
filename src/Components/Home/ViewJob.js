import React from "react";
import {job} from "../../Constatns/constants";

function ViewJob() {
    return (
        <div className="grey-bg">
            <div className="container container-largest viewjob-section">
                <h2 className="section-title text-center">Dexatel + You</h2>
                <p className="section-subtitle text-center">Take the next step in your career and join a team, <br/> where you will thrive and
                    enjoy coming to work.</p>
                <div className="row">
                    {job.map((el,i)=>{
                        return (
                            <div className="col-md-12" key={i}>
                                <div className="viewjob-card">
                                    <div>
                                        <h4>{el.position}</h4>
                                        <p>{el.place}</p>
                                    </div>
                                    <div>
                                        <a className="btn btn-primary large" href={el.link}>View Job</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ViewJob;
