import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";

import LargeCard from '../card/large';

const defaultSwiperConfig = {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
}

const SwipeView = ({
  list = [],
  swiperConfig = defaultSwiperConfig,
  initialSlide = 0,
  onSlideChange = () => {},
}) => {
  const swiper = React.useRef(null);

  const setSwiper = (newSwiper) => {
    swiper.current = newSwiper;
  };

  React.useEffect(()=>{
    if(swiper.current) {
      swiper.current.slideTo(initialSlide)
    }
  }, [initialSlide]);

  return (
    <Swiper
      slidesPerView={swiperConfig.slidesPerView}
      centeredSlides={swiperConfig.centeredSlides}
      spaceBetween={swiperConfig.spaceBetween}
      initialSlide={initialSlide}
      onSlideChange={({activeIndex}) => onSlideChange(activeIndex)}
      onSwiper={setSwiper}
    >
      {list.map((item,idx)=>(
        <SwiperSlide key={idx}>
          <LargeCard {...item}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeView;