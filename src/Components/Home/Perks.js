import React from 'react';
import {perks} from '../../Constatns/constants'

function Perks() {
    return (
        <div className="container-large perks-section">
            <h2 className="section-title text-center">Instant Perks</h2>
            <div className="row">
                {perks.map((el, i) => {
                    return (
                        <div className="col-md-4" key={i}>
                            <div className="perks-item text-center">
                                <img src={el.icon} alt=""/>
                                <h3 className="section-subtitle">{el.name}</h3>
                                <span className="perks-txt">{el.txt}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Perks;
