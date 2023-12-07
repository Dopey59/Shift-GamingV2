import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import TrustPage from '../components/trust';
import RakutenGames from '../components/apiGameRakuten';


import '../assets/wallpaper2.webp'
import '../index.css';

export default function Homepage(){

 
    
    return(
        <>
        <Navbar/>
        <main className='w-full h-auto grid-cols-2'>
            <div className='imgBackGround -z-1 bg-cover invisible sm:visible'>
                <img
                className='wallpaper fixed invisible sm:visible'
                src={require('../assets/wallpaper2.webp')}
                alt="wallpaper"
                />
            </div>
            <div className="xl:p-44">
                {/* Section 1 start */}
                <div className='relative flex justify-between w-auto h-full items-center sm:p-20 py-16 px-2 bg-zinc-900 '>
                    <div className='flex flex-col gap-8 sm:translate-y-0 p-2'>
                        <h1 className='text-xl font-semibold sm:text-5xl text-white'>Des jeux à prix réduit toute l'année 🎮</h1>
                        <p className='text-white sm:text-lg text-xs'>#Valable sur toutes les plateformes</p>
                        <div>
                            <a href='/En-savoir-plus' className='bg-rose-600 px-auto rounded p-2 font-semibold text-white'>En savoir plus</a>
                        </div>
                    </div>
                    <div>
                            <img
                            className='wallpaper2 w-64 h-auto rounded p-8 sm:visible invisible'
                            src={require('../assets/box-orange-dark.png')}
                            alt="wallpaper"
                            />
                    </div>
                </div>
                
                    <Carousel/>

                    {/* Section 1 end */}
               

                    {/* Section 2 start */}
                <div className="relative bg-gray-100 p-6 ">
                    
                    <div className=' flex flex-col gap-4 items-center justify-center mt-8 mb-8'>
                        <div className='flex flex-col gap-2 items-start sm:items-center'>
                        <h1 className='sm:text-4xl text-xl font-bold uppercase'>Des partenaires puissants</h1>
                        <h2 className='text-xs sm:text-lg'>Clique sur l'une des catégories 
                            pour attérir en parachute chez l'un de nos partenaires. </h2>
                        </div>
                    </div>

                    <div className="grid w-full h-auto gap-6 sm:grid-cols-4 grid-cols-2">

                        <div className='flex justify-center flex-col items-center
                        duration-0 transition-0 hover:duration-700 hover:origin-left-right hover:skew-y-3 hover:scale-105
                            hover:contrast-125 hover:brightness-50 '>
                            <a className=" " href="https://track.effiliation.com/servlet/effi.click?id_compteur=22918216" target="_blank">
                                <img src="https://track.effiliation.com/servlet/effi.show?id_compteur=22918216" alt="pub"/>
                            </a>
                            <div className='mt-4 lg:invisible visible' >
                                <a
                                href='https://track.effiliation.com/servlet/effi.click?id_compteur=22918216' 
                                target="_blank"
                                className='border-2 border-black p-2 rounded font-semibold'>
                                En savoir plus </a>
                            </div>
                        </div>

                        <div className='flex justify-center flex-col items-center first-letter:duration-0 transition-0 hover:duration-700
                            hover:origin-left-right hover:skew-y-3 hover:scale-105 hover:contrast-125 hover:brightness-50 '>
                            <a href="https://track.effiliation.com/servlet/effi.click?id_compteur=22924113" target="_blank">
                                <img className="" src="https://track.effiliation.com/servlet/effi.show?id_compteur=22924113" alt="pub"/>
                            </a>
                            <div className='mt-4 lg:invisible visible' >
                                <a
                                href='https://track.effiliation.com/servlet/effi.click?id_compteur=22918216' 
                                target="_blank"
                                className='border-2 border-black p-2 rounded font-semibold'>
                                En savoir plus </a>
                            </div>
                        </div>

                        <div className='flex justify-center flex-col items-center duration-0 transition-0 hover:duration-700 hover:origin-left-right
                            hover:skew-y-3 hover:scale-105 hover:contrast-125 hover:brightness-10 '>
                            <a href="https://www.instant-gaming.com/?igr=gamer-7232d0" target="_blank">
                                <img className="" src={require('../assets/ig.jpg')} alt="pub"/>
                            </a>
                            <div className='mt-4 lg:invisible visible' >
                                <a
                                href='https://www.instant-gaming.com/?igr=gamer-7232d0' 
                                target="_blank"
                                className='border-2 border-black p-2 rounded font-semibold'>
                                En savoir plus </a>
                            </div>
                        </div>

                        <div className='flex justify-center flex-col items-center duration-0 transition-0 hover:duration-700 hover:origin-left-right hover:skew-y-3
                            hover:scale-105 hover:contrast-125 hover:brightness-10 '>
                            <a href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=f7a67d4db037262810445128d04f8322&camp=1642&creative=6746&index=computers&keywords=pc gamer" target="_blank">
                                <img className="" src={require('../assets/amazon-gaming.jpg')} alt="pub"/>
                            </a>
                            <div className='mt-4 lg:invisible visible' >
                                <a
                                href='' 
                                target="_blank"
                                className='border-2 border-black p-2 rounded font-semibold'>
                                En savoir plus </a>
                            </div>
                        </div>
                    </div>

                        <div className='flex flex-col justify-start items-start sm:items-center  gap-2 mt-8 mb-8'>
                            <h1 className='relative sm:text-4xl text-xl font-bold uppercase'>Trailer Officiel GTA VI </h1>
                            <h2 className='text-xs sm:text-lg text-center'>Disponible en 2025. </h2>
                        </div>

                        <div className='flex justify-center'>
                            <iframe className='rounded' width="1280" height="720" src="https://www.youtube.com/embed/QdBZY2fkU-0" title="Grand Theft Auto VI Trailer 1"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>

                        <div className='flex justify-start sm:justify-center items-center mt-8 mb-8'>
                            <h1 className='relative sm:text-3xl text-xl font-bold uppercase'>Catégories Tops Loots </h1>
                        </div>

                        <div className='containerLoot grid sm:grid-cols-2 gap-4'>
                            <a href="/Siege-gaming" target="_blank" rel="noopener noreferrer">
                              <div className='relative flex items-end'>
                                <div className='absolute flex flex-col justify-start'>
                                    <h1 className='sm:text-3xl text-white sm:p-2 mx-2 rounded font-bold'>Sièges Gaming</h1>
                                    <div className=' flex gap-2 p-2'>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>NobleChairs</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Ergonomique</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Cuir</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Tissu</span>
                                    </div>
                                </div>
                               <img className="" src={require('../assets/gamer-chair.avif')} alt="pub"/>
                              </div>
                            </a>

                            <a  className="" href="" target="_blank" rel="noopener noreferrer">
                                <div className='relative flex items-end '>
                                    <div className='absolute flex flex-col justify-start'>
                                        <h1 className='sm:text-3xl text-white sm:p-2 mx-2 rounded font-bold'>Pc, écrans, claviers..</h1>
                                        <div className=' flex gap-2 p-2'>
                                        <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Ecrans 4K</span>
                                        <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Asus</span>
                                        <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Nvidia</span>
                                        <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Corsair</span>
                                        </div>
                                    </div>
                                    <img className="" src={require('../assets/setup-3.avif')} alt="pub"/>
                                </div>
                            </a>

                            <a href="https://www.instant-gaming.com/?igr=gamer-7232d0" target="_blank" rel="noopener noreferrer">
                              <div className='relative flex items-end'>
                                <div className='absolute flex flex-col justify-start'>
                                    <h1 className='sm:text-3xl text-white sm:p-2 mx-2 rounded font-bold'>Jeux vidéos</h1>
                                    <div className=' flex gap-2 p-2'>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Instant Gaming</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>10% à 90% off</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Bons plans</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Toutes plateformes</span>
                                    </div>
                                </div>
                                    <img className="" src={require('../assets/gta3.avif')} alt="pub"/>
                              </div>
                            </a>

                            {/* <a href="" target="_blank" rel="noopener noreferrer">
                              <div className='relative flex justify-center mx-auto items-center '>
                                <div className='absolute flex flex-col justify-center'>
                                    <h1 className='sm:text-3xl sm:p-2 mx-auto rounded font-bold'>Idées cadeaux</h1>
                                    <div className=' flex gap-2 p-2'>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Offrir</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Noel</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Bons plans</span>
                                    </div>
                                </div>
                              </div>
                            </a> */}

                        </div>

                        <div className='flex justify-start sm:justify-center items-center mt-8'>
                            <h1 className='relative sm:text-3xl text-xl font-bold uppercase'>Les tips de pro </h1>
                        </div>

                        <div className='w-full grid sm:grid-cols-3 gap-4 items-center border-2 border-gray-100 '>
                            <div className='w-full sm:mt-8 mt-4 gap-4 sm:mb-8 flex flex-col items-center border-2 border-gray-100 bg-white rounded p-4'>
                                    <img

                                        width="200px" height="100px"
                                        className='montage-pc wallpaper2 rounded-xl w-full h-auto'
                                        src={require('../assets/choisir-composant-pc.jpg')}
                                        alt="comment choisir composant pc"
                                    />
                                    <h1 className='font-bold uppercase'>Comment Choisir Son Pc / pièces </h1>
                                    <p>Retrouve dans ce cours article comment build un pc avec un faible et gros budget. L'article est dans le but 
                                        de t'informer dans les grandes lignes afin de savoir vers quel types de composants s'orienter selon ton budget. 
                                    </p>
                                    
                                </div>
                            <a href='/Guide-pc'>
                            <div className='w-full sm:mt-8 mt-4 gap-4 sm:mb-8 flex flex-col items-center border-2 border-gray-100 bg-white rounded p-4'>
                                <img

                                    width="300px" height="100px"
                                    className='montage-pc wallpaper2 rounded-xl w-full h-auto'
                                    src={require('../assets/black-pc.jpg')}
                                    alt="wallpaper"
                                />
                                <h1 className='font-bold uppercase'>Comment Choisir Son Pc / pièces ?</h1>
                                <p>Retrouve dans ce cours article comment build un pc avec un faible et gros budget. L'article est dans le but 
                                    de t'informer dans les grandes lignes afin de savoir vers quel types de pc s'orienter selon ton budget. 
                                </p>
                            </div>
                            </a>
                                <div className='w-full sm:mt-8 mt-4 gap-4 sm:mb-8 flex flex-col items-center border-2 border-gray-100 bg-white rounded p-4'>
                                    <img

                                        width="300px" height="100px"
                                        className='montage-pc wallpaper2 rounded-xl w-full h-auto'
                                        src={require('../assets/gaming-desk.jpg')}
                                        alt="comment choisir son bureau gaming"
                                    />
                                    <h1 className='font-bold uppercase'>Comment Choisir Son Bureau Gaming </h1>
                                    <p>Retrouve dans ce cours article comment build un pc avec un faible et gros budget. L'article est dans le but 
                                        de t'informer dans les grandes lignes afin de savoir vers quel types de pc s'orienter selon ton budget. 
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
        </main>
        <Footer/>
        </>
    );
}