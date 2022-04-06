import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination, Controller } from "swiper";
import "swiper/css/bundle";
import ImageGroup from './ImageGroup'
import './main.css'

import pic2 from './Images/pic2.jpg'


SwiperCore.use([Navigation, Pagination, Controller]);

function JuiceSlider ()
{
   const [controlledSwiper, setControlledSwiper] = useState(null);
    const picSlider = [];

    const testSlider = [pic2]

    for(let i=0; i>15; i++)
    {
       picSlider.push( 
       <SwiperSlide
        key={`slide-${i}`}
        className='mainSlides'
        tag="li">

            <img 
            src={ImageGroup[i]}
            alt= {`mainSlide-${i}`}
            className="flavors"/>

        </SwiperSlide> 
        )
    }
    return (
      <>
        {/* <img src="./pic1.png"/> */}

        {/* <div className="test">{testSlider[0]}</div> */}

        <Swiper
          id="main"
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          // direction={"vertical"}
          height={1}
          spaceBetween={0}
          slidesPerView={1}
          onInit={(swiper) => console.log(`Swiper initialized`, swiper)}
          onSlideChange={(swiper) =>
            console.log(`Slide index changed to:`, swiper.activeIndex)
          }
          onReachEnd={() => console.log("Swiper end reached")}
          onReachBeginning={() => console.log("Swiper start reached")}
        >
          {picSlider}
        </Swiper>
      </>
    );
}

export default JuiceSlider