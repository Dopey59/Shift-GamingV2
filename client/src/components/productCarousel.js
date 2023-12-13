import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../swiper.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function App() {
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
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex flex-col items-center justify-center'>
            <img    
              width="100%"   
              height="auto"                              
              className='montage-pc wallpaper2 '
              src={require('../assets/mouse.jpg')}
              alt="comment choisir son bureau gaming"
              />
            <div className='flex p-2 flex-col gap-1 h-auto w-full'>
            <h1 className='text-sm font-semibold'>Souris Gaming</h1>
            <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='flex flex-col items-center justify-center'>
            <img    
              width="100%"   
              height="auto"                              
              className='montage-pc wallpaper2 '
              src={require('../assets/headset.jpg')}
              alt="casque gaming "
              />
            <div className='flex p-2 flex-col gap-1 h-auto w-full'>
            <h1 className='text-sm font-semibold'>Casques Gaming</h1>
            <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='flex flex-col items-center justify-center'>
            <img    
              width="100%"   
              height="auto"                              
              className='montage-pc wallpaper2 '
              src={require('../assets/keyboard.jpg')}
              alt="clavier gaming"
              />
            <div className='flex p-2 flex-col gap-1 h-auto w-full'>
            <h1 className='text-sm font-semibold'>Claviers Gaming</h1>
            <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='flex flex-col items-center justify-center'>
            <img    
              width="100%"   
              height="auto"                              
              className='montage-pc wallpaper2 '
              src={require('../assets/screen.jpg')}
              alt="comment choisir son bureau gaming"
              />
            <div className='flex p-2 flex-col gap-1 h-auto w-full'>
            <h1 className='text-sm font-semibold'>Ecrans PC</h1>
            <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='flex flex-col items-center justify-center'>
            <img    
              width="100%"   
              height="auto"                              
              className='montage-pc wallpaper2 '
              src={require('../assets/jbl.jpg')}
              alt="comment choisir son bureau gaming"
              />
            <div className='flex p-2 flex-col gap-1 h-auto w-full'>
            <h1 className='text-sm font-semibold'>Enceintes bluetooth</h1>
            <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
