import React from 'react';
import {interview} from "../../Constatns/constants";

function Interview() {
    return (
        <div className="container container-largest interview-section">
            <h2 className="section-title text-center">Our Interview Process</h2>
            <div className="d-flex justify-content-between row position-relative">
                <div className="interview-line"/>
                {interview.map((el, i) => {
                    return (
                        <div className="interview-points text-center" key={i}
                             style={{width: `${100 / interview.length}%`}}>
                            <span className={`interview-point ${el.last ? 'last' : ''} ${el.forDeveloper ? 'developer' : ''}`}>{el.point}</span>
                            <p className="interview-txt" dangerouslySetInnerHTML={{__html: el.txt}}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Interview
