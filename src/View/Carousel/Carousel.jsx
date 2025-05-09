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
    <Swiper
      slidesPerView={1}
      loop
      className="contain-carousel"
      // modules={[Autoplay]}
      // autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {prodByCat?.map((item, index) => (
        <SwiperSlide key={index} className="flex flex-col w-full h-full ">
          <div className="flex justify-center w-full py-10 ">
            <h1 className="titleProd-carousel">featured products</h1>
          </div>
          <div className="flex w-full">
            <div className="flex items-center justify-end w-1/2 h-full pr-5">
              <img src={item[0].image} alt={item[0].title} className="w-2/5" />
            </div>
            <div className="w-1/2 h-full">
              {' '}
              <h1 className="font-title">{item[0].title}</h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
