import React, {useState} from "react";
import StarRatings from 'react-star-ratings';
import SwiperCore, {Pagination, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {glassdoor} from '../../Constatns/constants'
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination, EffectFade]);

function GlassDoor() {
    const [swiper, setSwiper] = useState();
    return (
        <div className="rotate">
            <div className="glassdoor-section grey-bg">
                <div className="container container-largest">
                    <div className="row">
                        <div className="col-md-12">
                            <Swiper
                                onSwiper={(swiper) => setSwiper(swiper)}
                                speed={1000}
                                pagination={{clickable: true}}
                                effect='fade'>
                                {glassdoor.map((el, i) => {
                                    return (
                                        <SwiperSlide key={i} className="glassdoor-slide">
                                            <div className="glassdoor-info row">
                                                <div className="glassdoor-rating">
                                                    <img src="/img/src/rating.png" alt=""/>
                                                </div>
                                                <div className="col-md-11 glassdoor-info-block">
                                                    <div>
                                                        <h4>{el.title}</h4>
                                                        <p>{el.text}</p>
                                                        <strong className="section-title">{el.name}</strong>
                                                        <br/>
                                                        <span>{el.profession}</span>
                                                    </div>
                                                </div>
                                                <div className="glassdoor-img">
                                                    <img src={el.img} alt=""/>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlassDoor;
