import React from 'react';
import './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useSelector } from 'react-redux';
export const Carousel = () => {
  const prodByCat = useSelector((state) => state.products.productsByCat);
  console.log('prodByCat', prodByCat);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Swiper slidesPerView={1} loop style={{ height: '100%', width: '100%' }}>
        <SwiperSlide>
          <div>hola</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
