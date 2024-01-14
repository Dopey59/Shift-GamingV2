import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function CarouselProduct() {
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
            <a href='https://www.amazon.fr/s?k=souris+gaming&amp;i=computers&amp;rh=p_72%253A437873031&amp;dc&amp;__mk_fr_FR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=2SW5MDMLVL1K6&amp;qid=1702501689&amp;rnid=437872031&amp;sprefix=souris+gaming%252Ccomputers%252C60&amp;ref=sr_nr_p_72_1&amp;ds=v1%253AjyWJBBoaoXlLCO0M8XGvbIM2zuCrHGSgMdsImEwPcWg&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=36ec650557616291e6d3f839efc9a826&camp=1642&creative=6746'>
                <div className='flex flex-col items-center justify-center'>
                    <img    
                    width="100%"   
                    height="auto"                              
                    className='montage-pc wallpaper2 '
                    src={require('../assets/mouse.webp')}
                    alt="comment choisir son bureau gaming"
                    />
                    <div className='flex p-2 bg-white items-center flex-col gap-1 h-auto w-full'>
                    <h1 className='text-sm font-semibold'>Souris Gaming</h1>
                    <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
                    </div>
                </div>

            </a>
        </SwiperSlide>

        <SwiperSlide>
            <a href='https://www.amazon.fr/s?k=casque+gaming&amp;i=computers&amp;rh=p_72%253A437873031%252Cp_n_deal_type%253A26902977031&amp;dc&amp;crid=MPQ5RUZEV3A9&amp;qid=1702501601&amp;rnid=26902974031&amp;sprefix=casque%252Ccomputers%252C132&amp;ref=sr_nr_p_n_deal_type_1&amp;ds=v1%253AOUaOA1qwbdrTzVQbIFKSazfrUZ3qma4E0ItrGRrveHc&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=d434c6641ec728d09e64313f49bd21a8&camp=1642&creative=6746'>
                <div className='flex flex-col items-center justify-center'>
                    <img    
                    width="100%"   
                    height="auto"                              
                    className='montage-pc wallpaper2 '
                    src={require('../assets/headset.webp')}
                    alt="casque gaming "
                    />
                    <div className='flex p-2 flex-col gap-1 h-auto w-full bg-white items-center'>
                    <h1 className='text-sm font-semibold'>Casques Gaming</h1>
                    <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
                    </div>
                </div>

            </a>
        </SwiperSlide>
        
        <SwiperSlide>
            <a href='https://www.amazon.fr/s?k=clavier+mecanique&amp;i=computers&amp;rh=p_72%253A437873031&amp;dc&amp;__mk_fr_FR=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=VQN8AB0AD6Z7&amp;qid=1702501849&amp;rnid=437872031&amp;sprefix=clavier+mecanique%252Ccomputers%252C64&amp;ref=sr_nr_p_72_1&amp;ds=v1%253AgDJWN8DgQxZ9Codxr4mdR7w7p1HTSB%252Ba369HqUnmCsM&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=4adb859c2332f4039f58f49f42b9f0e5&camp=1642&creative=6746'>
                <div className='flex flex-col items-center justify-center'>
                    <img    
                    width="100%"   
                    height="auto"                              
                    className='montage-pc wallpaper2 '
                    src={require('../assets/keyboard.webp')}
                    alt="clavier gaming"
                    />
                    <div className='flex p-2 flex-col gap-1 h-auto w-full bg-white items-center'>
                    <h1 className='text-sm font-semibold'>Claviers Mecanique</h1>
                    <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
                    </div>
                </div>

            </a>
        </SwiperSlide>

        <SwiperSlide>
            <a href='https://www.amazon.fr/s?k=ecran+pc+gamer&amp;i=computers&amp;rh=p_72%253A437873031&amp;dc&amp;crid=1Y4W5FNUYGIDU&amp;qid=1702501947&amp;rnid=437872031&amp;sprefix=ecran+pc%252Ccomputers%252C74&amp;ref=sr_nr_p_72_1&amp;ds=v1%253AWjAau6lbkfOBtuBYLvXguRElXROTfmX6D3j%252Fe9XRudk&_encoding=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=758aeefa041d07173e5d62582089a84e&camp=1642&creative=6746'>
                <div className='flex flex-col items-center justify-center'>
                    <img    
                    width="100%"   
                    height="auto"                              
                    className='montage-pc wallpaper2 '
                    src={require('../assets/screen.webp')}
                    alt="comment choisir son bureau gaming"
                    />
                    <div className='flex p-2 flex-col gap-1 h-auto w-full bg-white items-center'>
                    <h1 className='text-sm font-semibold'>Ecrans PC</h1>
                    <p className='text-sm font-semibold text-indigo-600'>En promotion</p>
                    </div>
                </div>

            </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
