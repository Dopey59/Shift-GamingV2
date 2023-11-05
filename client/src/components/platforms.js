export default function(){
    return(
        // <!-- Clients -->
        <div class="relative px-4 sm:p-0 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-100">
        {/* <!-- End Title --> */}

        <div class="list flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
            <div className="flex flex-col items-center">
                <a href='#'>
                <img
                    className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                    src={require('../assets/buttons.png')}
                    alt="wallpaper"
                />   
                <p className='text-white'>Playstation</p>
                </a>
            </div>
                <a className='hover:cursor-pointer' href='#'>
            <div className="flex flex-col items-center">
                <img
                    className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                    src={require('../assets/xbox.png')}
                    alt="wallpaper"
                />  
                <p>Xbox</p>
            </div>
                </a>
            <div className="flex flex-col items-center">
                <a href='#'>
                <img
                    className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                    src={require('../assets/nintendo-switch.png')}
                    alt="wallpaper"
                />  
                </a>
                <p>Nintendo</p>
            </div>
            <div className="flex flex-col items-center">
                <img
                    className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                    src={require('../assets/vr.png')}
                    alt="wallpaper"
                />
                <p>Réalité virtuelle</p>
            </div>
            <div className="flex flex-col items-center">
                <img
                    className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                    src={require('../assets/computer.png')}
                    alt="wallpaper"
                />  
                <p>Jeux PC</p>
            </div>
            <div className="flex flex-col items-center">
                <img
                    className="svgCarousel py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                    src={require('../assets/platform.png')}
                    alt="wallpaper"
                />
                <p>Toutes les platefromes</p>
            </div>
        </div>
        </div>
        // <!-- End Clients -->
    )
}