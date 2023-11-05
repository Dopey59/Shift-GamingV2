import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Api from '../components/api';
import Footer from '../components/footer';



import '../assets/wallpaper2.webp'
import '../index.css';

const images = [
    "https://shop.wankil.fr/cdn/shop/products/sweatsovietrougemockup.jpg?v=1579800917&width=600/",
    "https://shop.wankil.fr/cdn/shop/products/sweatwankil_1_40a811ad-d859-4237-93eb-9778162ca8c4.jpg?v=1616257159&width=600",
    "https://shop.wankil.fr/cdn/shop/products/sweatcasquette_2_01bdd90a-05d8-4c01-b08c-83d93c965a42.jpg?v=1616257503&width=600",
    "https://shop.wankil.fr/cdn/shop/products/sweatcasquette_3.jpg?v=1616257503&width=670",
  ];

export default function Homepage(){
    
    return(
        <>
        <main className='w-full h-auto grid-cols-2'>
            <Navbar/>
            <div className='imgBackGround -z-1 bg-cover invisible sm:visible'>
                <img
                className='wallpaper fixed invisible sm:visible'
                src={require('../assets/wallpaper2.webp')}
                alt="wallpaper"
                />
            </div>
            <div className="xl:p-44">
                {/* Section 1 start */}
                <div className='relative flex justify-between items-center sm:p-20 py-16 px-2 bg-zinc-900 '>
                    <div className='flex flex-col gap-8 sm:translate-y-0 p-2'>
                        <h1 className='text-xl font-semibold sm:text-5xl text-white sm:w-2/3'>Des jeux à prix réduit toute l'année 🎮</h1>
                        <p className='text-white sm:text-lg text-xs'>Valable sur toutes les plateformes*</p>
                        <div>
                            <a href='#' className='bg-rose-600 px-auto rounded p-2 font-semibold text-white'>En savoir plus</a>
                        </div>
                    </div>
                    <div>
                        <a href="#">
                            <img
                            className='wallpaper2 w-64 h-auto rounded-xl p-8 sm:visible invisible'
                            src={require('../assets/box-orange-dark.png')}
                            alt="wallpaper"
                            />
                        </a>
                    </div>
                </div>
                
                <Carousel/>

                {/* Section 1 end */}
               

                {/* Section 2 start */}
                    <div className="relative bg-gray-100 p-6 ">
                        
                        <div className='w-full flex justify-center sm:mt-4 mt-4 mb-8 sm:mb-8'>
                            <h1 className='sm:text-3xl text-indigo-900 text-xl font-bold'>Des partenaires puissants</h1>
                        </div>

                        <div className="grid w-full h-auto gap-6 sm:grid-cols-4 grid-cols-2">
                            <div className='flex justify-center flex-col items-center
                            duration-0 transition-0 hover:duration-700 hover:origin-left-right hover:skew-y-3 hover:scale-105
                             hover:contrast-125 hover:brightness-50 '>
                                <a classsName="rounded-xl " href="https://track.effiliation.com/servlet/effi.click?id_compteur=22918216" target="_blank">
                                    <img src="https://track.effiliation.com/servlet/effi.show?id_compteur=22918216" alt="pub"/>
                                </a>
                                <div className='mt-4 lg:invisible visible' >
                                    <a
                                    href='https://track.effiliation.com/servlet/effi.click?id_compteur=22918216' 
                                    target="_blank"
                                    className='bg-black p-2 rounded text-white font-semibold'>
                                    En savoir plus </a>
                                </div>
                            </div>
                            <div className='flex justify-center flex-col items-center first-letter:duration-0 transition-0 hover:duration-700
                             hover:origin-left-right hover:skew-y-3 hover:scale-105 hover:contrast-125 hover:brightness-50 '>
                                <a href="https://track.effiliation.com/servlet/effi.click?id_compteur=22924113" target="_blank">
                                    <img classsName="rounded-full" src="https://track.effiliation.com/servlet/effi.show?id_compteur=22924113" alt="pub"/>
                                </a>
                                <div className='mt-4 lg:invisible visible' >
                                    <a
                                    href='https://track.effiliation.com/servlet/effi.click?id_compteur=22918216' 
                                    target="_blank"
                                    className='bg-black p-2 rounded text-white font-semibold'>
                                    En savoir plus </a>
                                </div>
                                
                            </div>
                            <div className='flex justify-center flex-col items-center duration-0 transition-0 hover:duration-700 hover:origin-left-right
                             hover:skew-y-3 hover:scale-105 hover:contrast-125 hover:brightness-10 '>
                                <a href="#" target="_blank">
                                    <img classsName="rounded-full" src={require('../assets/ig.jpg')} alt="pub"/>
                                </a>
                                <div className='mt-4 lg:invisible visible' >
                                    <a
                                    href='https://track.effiliation.com/servlet/effi.click?id_compteur=22918216' 
                                    target="_blank"
                                    className='bg-black p-2 rounded text-white font-semibold'>
                                    En savoir plus </a>
                                </div>
                            </div>
                            <div className='flex justify-center flex-col items-center duration-0 transition-0 hover:duration-700 hover:origin-left-right hover:skew-y-3
                                hover:scale-105 hover:contrast-125 hover:brightness-10 '>
                                <a href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=f7a67d4db037262810445128d04f8322&camp=1642&creative=6746&index=computers&keywords=pc gamer" target="_blank">
                                    <img classsName="rounded-full" src={require('../assets/amazon-gaming.jpg')} alt="pub"/>
                                </a>
                                <div className='mt-4 lg:invisible visible' >
                                    <a
                                    href='' 
                                    target="_blank"
                                    className='bg-black p-2 rounded text-white font-semibold'>
                                    En savoir plus </a>
                                </div>
                            </div>
                        </div>
                    <a href="https://track.effiliation.com/servlet/effi.click?id_compteur=22924129" target="_blank">
                        <div className='flex justify-center items-center  sm:mt-4 mt-8 mb-4 sm:mb-8'>
                            <h1 className='relative sm:text-3xl text-xl text-indigo-900 font-bold'>Chaises gaming & ergonomiques</h1>
                        </div>
                    </a>
                    </div>

                {/* Section 2 end */}

                {/* Section 3 start */}
                <Api/>
                {/* Section 3 end */}

            </div>
        
                {/* Footer Start */}
                <Footer/>
                {/* Footer Start */}
        </main>
        </>
    );
}