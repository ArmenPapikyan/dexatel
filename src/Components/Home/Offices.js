import React from 'react';

function Offices() {
    return (
        <div className="container-largest offices-section container">
            <h2 className="section-title text-center">Our Offices</h2>
            <div className="row">
                <div className="col-md-6 offices-item">
                    <div className="position-relative">
                        <div className="position-relative offices-map">
                            <img className="decoration" src="/img/decorations/dotes.svg" alt=""/>
                            <div className="offices-map offices-img"
                                 style={{backgroundImage: 'url(/img/Offices/map1.jpg)'}}/>
                        </div>
                        <div className="offices-info text-center">
                            <span>Aia tn 4-17, 10117 Tallinn <br/> <strong>Estonia</strong> ( Headquarters )</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 offices-item">
                    <div className="position-relative">
                        <div className="position-relative offices-map">
                            <img className="decoration" src="/img/decorations/dotes.svg" alt=""/>
                            <div className="offices-img" style={{backgroundImage: 'url(/img/Offices/map2.jpg)'}}/>
                        </div>
                        <div className="offices-info text-center">
                            <span>Amiryan 4/4 Yerevan <br/> <strong>Armenia</strong> ( Branch )</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offices;
