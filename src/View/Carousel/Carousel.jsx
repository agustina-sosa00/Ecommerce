import React, { useEffect, useState } from 'react';
import './Carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useSelector } from 'react-redux';
import { imageSProd } from '../../Mock/arrayImageCarousel';
import { ButtonCarousel } from './ButtonCarousel';
import { formatPrice } from '../../Utils/formatPrice';
export const Carousel = () => {
  const prodByCat = useSelector((state) => state.products.productsByCat);
  const [prodArray, setProdArray] = useState(prodByCat);
  useEffect(() => {
    if (prodByCat) {
      const newProdArray = prodByCat.map((item) => {
        const product = item[0];
        const prodFined = imageSProd.find((img) => img.id === product.id);
        const newProduct = {
          ...product,
          image: prodFined ? prodFined.img : product.image,
        };
        return [newProduct];
      });

      setProdArray(newProdArray);
    }
  }, [prodByCat]);
  return (
    <Swiper
      slidesPerView={1}
      loop
      className="contain-carousel"
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      {prodArray?.map((item, index) => (
        <SwiperSlide key={index} className="contain-slider-prod">
          {/* <div className="containTitle-carousel">
            <h1 className="title-carousel">featured products</h1>
          </div> */}
          <div className="containInfo-carousel ">
            <div className="contain-image-carousel">
              <img
                src={item[0].image}
                alt={item[0].title}
                className="image-prod-carousel"
              />
            </div>
            <div className="containDetail-carousel">
              <h1 className="titleProd-carousel">{item[0].title}</h1>

              <p className="priceProd-carousel">
                <span>price: </span>
                {formatPrice(item[0].price)}
              </p>
              <p className="priceProd-carousel">
                <span>category: </span>
                {item[0].category}
              </p>

              <ButtonCarousel />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <img
        src="https://i.imgur.com/fL5fmP1.png"
        alt="image"
        className="image-gral-carousel"
      />
    </Swiper>
  );
};
