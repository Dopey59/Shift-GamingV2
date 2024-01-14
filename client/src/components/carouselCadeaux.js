import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function CarouselCadeaux() {
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
            slidesPerView: 2,
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
            <a href='https://www.amazon.fr/s?k=enceinte+musique&amp;i=electronics&amp;rh=n%253A13921051%252Cp_72%253A437873031%252Cp_89%253ABose%257CJBL&amp;dc&amp;ds=v1%253AfgdiW9snfa3Mz674P%252BtEKCeo4ahoeCY11BhoyqO4Q9o&amp;qid=1702502058&amp;rnid=1680780031&amp;ref=sr_nr_p_89_5&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=5c790712077ce6029604754a898b6879&camp=1642&creative=6746'>
                <div className='flex flex-col items-center justify-center'>
                    <img    
                    width="100%"   
                    height="auto"                              
                    className='montage-pc wallpaper2 '
                    src={require('../assets/jbl.webp')}
                    alt="comment choisir son bureau gaming"
                    />
                    <div className='flex p-2 flex-col gap-1 h-auto w-full bg-white items-center'>
                    <h1 className='text-sm font-semibold'>Enceintes bluetooth</h1>
                    <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
                    </div>
                </div>
            </a>
        </SwiperSlide>

        <SwiperSlide>
            <a href='https://www.amazon.fr/s?k=led+chambre+usb&amp;rh=n%253A213080031%252Cp_72%253A225480031&amp;dc&amp;ds=v1%253A1wJdQN3y4W9jNIwzeCsKe4yYPZBJKSxZne8zD0E8MCs&amp;qid=1702566124&amp;rnid=225479031&amp;ref=sr_nr_p_72_1&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=1fe1535a0f75800e7ff667adfb29ceb6&camp=1642&creative=6746'>
                <div className='flex flex-col items-center justify-center'>
                    <img    
                    width="100%"   
                    height="auto"                              
                    className='montage-pc wallpaper2 '
                    src='https://images.unsplash.com/photo-1609815786487-6ac3811870b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM5fHxnYW1pbmclMjBsaWdodHxlbnwwfDB8MHx8fDI%3D'
                    alt="led decoration interieur "
                    />
                    <div className='flex p-2 flex-col gap-1 h-auto w-full bg-white items-center'>
                    <h1 className='text-sm font-semibold'>Ambiance lumineux</h1>
                    <p className='text-sm font-semibold text-indigo-600'>LED, RGB mood</p>
                    </div>
                </div>

            </a>
        </SwiperSlide>
        
        <SwiperSlide>
            <a href='https://www.amazon.fr/b?_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=bf38a2a5f4dfe00c09a873d9c8d45869&camp=1642&creative=6746&node=20904298031'>
                <div className='flex flex-col items-center justify-center'>
                    <img    
                    className='montage-pc wallpaper2'
                    src='https://images.unsplash.com/photo-1604586376807-f73185cf5867?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eGJveHxlbnwwfDB8MHx8fDI%3D'
                    alt="clavier gaming"
                    />
                    <div className='flex p-2 flex-col gap-1 h-auto w-full bg-white items-center'>
                    <h1 className='text-sm font-semibold'>Console Xbox & Accessoires</h1>
                    <p className='text-sm font-semibold text-red-600'>Offres limitées</p>
                    </div>
                </div>

            </a>
        </SwiperSlide>

        <SwiperSlide>
            <a href='https://www.amazon.fr/b?_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=968f3d24814833939b773e7a8522d19f&camp=1642&creative=6746&node=20904281031'>
                <div className='flex flex-col items-center justify-center'>
                    <img    
                    width="100%"   
                    height="auto"                              
                    className='montage-pc wallpaper2 '
                    src='https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHM1fGVufDB8MHwwfHx8Mg%3D%3D'
                    alt="comment choisir son bureau gaming"
                    />
                    <div className='flex p-2 flex-col gap-1 h-auto w-full bg-white items-center'>
                    <h1 className='text-sm font-semibold'>Console PS5 & Accessoires</h1>
                    <p className='text-sm font-semibold text-indigo-600'>Best Sellers</p>
                    </div>
                </div>
            </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
