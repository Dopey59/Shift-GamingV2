import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../swiper2.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export const EmblaCarousel = () => {

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
          spaceBetween: 10,
        }}
        breakpoints={{
          390: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        <div className=''>
          <SwiperSlide>
          <div className=" hover:bg-green-300 duration-0 transition hover:sm:font-bold hover:duration-500">
          <a className='hover:cursor-pointer' href='https://www.instant-gaming.com/fr/xbox/?igr=gamer-7232d0'>
          <div className="flex flex-col items-center">
            <img
                className="svgCarousel py-3 lg:py-5 w-10 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500 "
                src={require('../assets/xbox.png')}
                alt="wallpaper"
            />  
            <p className='p-2 sm:font-bold text-black text-sm'>Jeux Xbox</p>
          </div>
          </a>
        </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className=" hover:bg-blue-600 duration-0 transition hover:sm:font-bold hover:duration-500 hover:text-white">
          <a className='hover:cursor-pointer' href='https://www.instant-gaming.com/fr/playstation/?igr=gamer-7232d0'>
          <div className="flex flex-col items-center">
            <img
                className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0"
                src={require('../assets/buttons.png')}
                alt="wallpaper"
            />  
            <p className='p-2 sm:font-bold text-black text-sm '>Jeux Playstation</p>
          </div>
          </a>
        </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className=" hover:bg-red-600 duration-0 transition hover:sm:font-bold hover:duration-500 hover:text-white">
          <a className='hover:cursor-pointer' href='https://www.instant-gaming.com/fr/nintendo/switch/?igr=gamer-7232d0'>
          <div className="flex flex-col items-center">
            <img
                className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                src={require('../assets/nintendo-switch.png')}
                alt="wallpaper"
            />  
            <p className='p-2 sm:font-bold text-black text-sm'>Jeux Nintendo</p>
          </div>
          </a>
        </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className=" hover:bg-rose-500 duration-0 transition hover:sm:font-bold hover:duration-500 hover:text-white">
          <a className='hover:cursor-pointer' href='https://www.instant-gaming.com/?igr=gamer-7232d0'>
          <div className="flex flex-col items-center">
            <img
                className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                src={require('../assets/platform.png')}
                alt="wallpaper"
            />
            <p className='p-2 sm:font-bold text-black text-sm'>Toutes les plateformes</p>
          </div>
          </a>
        </div>      
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  )
}
export default EmblaCarousel;