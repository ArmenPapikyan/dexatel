import React, {useEffect} from 'react';
import {WOW} from 'wowjs'

function Values() {
    useEffect(() => {
        const wow = new WOW({
            offset: 100,
            mobile: false,
            live: true
        })

        wow.init();
    }, [])
    return (
        <div className="grey-bg">
            <div className="container container-largest values-section ">
                <h2 className="section-title text-center">Our Values</h2>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <img className="decoration" src="/img/decorations/dotes.svg" alt="decor"/>
                        <div className="wow animate__animated animate__fadeInUp">
                            <div className="values-block">
                                <h2 className="section-subtitle">Learn as much as impossible</h2>
                                <p className="values-text">We challenge each other to go above and beyond, break the barriers of knowledge and
                                    channel it to the needs of the customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <img className="decoration" src="/img/decorations/dotes.svg" alt="decor"/>
                        <div className="wow animate__animated animate__fadeInUp">
                            <div className="values-block">
                                <h2 className="section-subtitle">Contribute to our knowledge base</h2>
                                <p className="values-text">We make it point to share our knowledge and pass it on to our field. Continuous
                                    improvement is what makes this industry thrive.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <img className="decoration" src="/img/decorations/dotes.svg" alt="decor"/>
                        <div className="wow animate__animated animate__fadeInUp">
                            <div className="values-block">
                                <h2 className="section-subtitle">Drive results</h2>
                                <p className="values-text">Reap what you sow, so when the time comes we grow our revenue, hire world class
                                    specialists, dive into the needs of the customers and step by step climb up the ladder
                                    of success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values;
