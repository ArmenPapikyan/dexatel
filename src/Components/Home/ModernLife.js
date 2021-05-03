import React, {useState} from 'react'
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

SwiperCore.use([Autoplay]);
function ModernLife() {
    const [swiper, setSwiper] = useState();
    function moveRightSlide(){
        if(swiper) {
            swiper.params.autoplay.reverseDirection = true;
            swiper.params.speed = 1000;
        }
    }
    function moveLeftSlide(){
        if(swiper) {
            swiper.params.autoplay.reverseDirection = false;
            swiper.params.speed = 1000;
        }
    }
    function revertSlide(){
        if(swiper) {
            swiper.params.autoplay.reverseDirection = false;
            swiper.params.speed = 8000;
        }
    }
    return (
        <div className="container-fluid grey-bg text-center modern-section">
            <h2 className="section-title">
                Modern life, modern space
            </h2>
            <p className="section-subtitle">
                Here’s Why You’ll Love Dexatel
            </p>

            <div className="row position-relative">
                <div className="transparent-btn left" onMouseEnter={moveLeftSlide} onMouseLeave={revertSlide}/>
                <div className="transparent-btn right" onMouseEnter={moveRightSlide} onMouseLeave={revertSlide}/>
                <Swiper
                    freeMode={true}
                    spaceBetween={0}
                    slidesPerView={'auto'}
                    className="infinite-scroll-slider"
                    loop={true}
                    speed={8000}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        waitForTransition:false
                    }}
                >
                    <SwiperSlide className="col-md-4 modern-img" style={{backgroundImage: 'url(/img/src/m1.jpg)'}}/>
                    <SwiperSlide className="col-md-3 modern-img" style={{backgroundImage: 'url(/img/src/m2.jpg)'}}/>
                    <SwiperSlide className="col-md-5 modern-img" style={{backgroundImage: 'url(/img/src/m3.jpg)'}}/>
                    <SwiperSlide className="col-md-4 modern-img" style={{backgroundImage: 'url(/img/src/m1.jpg)'}}/>
                    <SwiperSlide className="col-md-3 modern-img" style={{backgroundImage: 'url(/img/src/m2.jpg)'}}/>
                    <SwiperSlide className="col-md-5 modern-img" style={{backgroundImage: 'url(/img/src/m3.jpg)'}}/>
                </Swiper>
            </div>
        </div>
    )
}

export default ModernLife;
