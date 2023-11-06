import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla bg-white/30 backdrop-sepia/30 " ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide hover:bg-green-300 duration-0 transition hover:sm:font-bold hover:duration-500">
          <a className='hover:cursor-pointer' href='https://www.instant-gaming.com/fr/xbox/?igr=gamer-7232d0'>
          <div className="flex flex-col items-center">
            <img
                className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500 "
                src={require('../assets/xbox.png')}
                alt="wallpaper"
            />  
            <p className='p-2 sm:font-bold text-black '>Jeux Xbox</p>
          </div>
          </a>
        </div>

        <div className="embla__slide hover:bg-blue-600 duration-0 transition hover:sm:font-bold hover:duration-500 hover:text-white">
          <a className='hover:cursor-pointer' href='https://www.instant-gaming.com/fr/playstation/?igr=gamer-7232d0'>
          <div className="flex flex-col items-center">
            <img
                className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0"
                src={require('../assets/buttons.png')}
                alt="wallpaper"
            />  
            <p className='p-2 sm:font-bold sm:w-auto w-1/2'>Jeux Playstation</p>
          </div>
          </a>
        </div>

        <div className="embla__slide hover:bg-red-600 duration-0 transition hover:sm:font-bold hover:duration-500 hover:text-white">
          <a className='hover:cursor-pointer' href='https://www.instant-gaming.com/fr/nintendo/switch/?igr=gamer-7232d0'>
          <div className="flex flex-col items-center">
            <img
                className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                src={require('../assets/nintendo-switch.png')}
                alt="wallpaper"
            />  
            <p className='p-2 sm:font-bold hover:text-black'>Jeux Nintendo</p>
          </div>
          </a>
        </div>

        <div className="embla__slide hover:bg-yellow-300 duration-0 transition hover:sm:font-bold hover:duration-500 ">
          <a className='hover:cursor-pointer' href='https://www.instant-gaming.com/fr/pc/?igr=gamer-7232d0'>
          <div className="flex flex-col items-center">
            <img
                className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                src={require('../assets/computer.png')}
                alt="wallpaper"
            />  
            <p className='p-2 sm:font-bold '>Jeux PC</p>
          </div>
          </a>
        </div>

        <div className="embla__slide hover:bg-rose-500 duration-0 transition hover:sm:font-bold hover:duration-500 hover:text-white">
          <a className='hover:cursor-pointer' href='https://www.instant-gaming.com/?igr=gamer-7232d0'>
          <div className="flex flex-col items-center">
            <img
                className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                src={require('../assets/platform.png')}
                alt="wallpaper"
            />
            <p className='p-2 sm:font-bold '>Toutes les plateformes</p>
          </div>
          </a>
        </div>       
      </div>
    </div>
  )
}
export default EmblaCarousel;