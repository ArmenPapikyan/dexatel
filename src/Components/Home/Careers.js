import React from 'react';
import {careersLogos} from '../../Constatns/constants'

function Careers() {
    return (
        <div className="container container-largest careers-section">
            <div className="row">
                <div className="col-md-6">
                    <div className="careers-logos">
                        {/*{careersLogos.map((el, i) => {*/}
                        {/*    return (*/}
                        {/*        <div className="col-md-4" key={i}>*/}
                        {/*            <img src={el} alt={el}/>*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*})}*/}
                        <img src="/img/careers/careers-list.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="careers-text">
                        <h2 className="section-title">Hi there. We’re Dexatel</h2>
                        <p className="careers-desc">Dexatel is an omnichannel messaging platform, powering enterprise level business
                            communications. Our celebrity customer list includes Alibaba, Viber, SAP and other word
                            class giants. Established in 2015 we had a significant growth featuring in Financial Times
                            as one of the fastest growing companies in Europe, two years in row.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers;
