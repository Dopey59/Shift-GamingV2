import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import TrustPage from '../components/trust';
import RakutenGames from '../components/apiGameRakuten';
import ProductCarousel from '../components/productCarousel';

import '../assets/wallpaper2.webp'
import '../index.css';

export default function Homepage(){   
    return(
        <>
        <Navbar/>
        <main className='w-full h-full '>
            <div className='imgBackGround -z-1 bg-cover invisible sm:visible'>
                <img
                className='wallpaper fixed invisible sm:visible'
                src={require('../assets/wallpaper2.webp')}
                alt="wallpaper"
                />
            </div>
            <div className="xl:p-44 w-auto h-auto">
                {/* Section 1 start */}
                <div className='relative flex justify-between w-auto h-full items-center sm:p-20 py-16 px-2 bg-zinc-900 '>
                    <div className='flex flex-col gap-8 sm:translate-y-0 p-2'>
                        <h1 className='text-xl font-semibold sm:text-5xl text-white'>Des jeux à prix réduit toute l'année 🎮</h1>
                        <p className='text-white sm:text-lg text-xs'>#Valable sur toutes les plateformes</p>
                        <div>
                            <a href='/Guide-ig' className='bg-rose-600 px-auto rounded p-2 font-semibold text-white'>En savoir plus</a>
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
                <div className="relative bg-gray-100 w-full h-auto p-6 ">
                    
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
                                className='border-2 text-xs border-black p-2 rounded font-semibold'>
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
                                className='border-2 text-xs border-black p-2 rounded font-semibold'>
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
                                className='border-2 text-xs border-black p-2 rounded font-semibold'>
                                En savoir plus </a>
                            </div>
                        </div>

                        <div className='flex justify-center flex-col items-center duration-0 transition-0 hover:duration-700 hover:origin-left-right hover:skew-y-3
                            hover:scale-105 hover:contrast-125 hover:brightness-10 '>
                            <a href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=f7a67d4db037262810445128d04f8322&camp=1642&creative=6746&index=computers&keywords=pc gamer" target="_blank">
                                <img src={require('../assets/amazon-gaming.jpg')} alt="pub"/>
                            </a>
                            <div className='mt-4 lg:invisible visible' >
                                <a
                                href='' 
                                target="_blank"
                                className='border-2 text-xs border-black p-2 rounded font-semibold'>
                                En savoir plus </a>
                            </div>
                        </div>
                    </div>

                        <div className='flex flex-col justify-start items-start sm:items-center  gap-2 mt-8 mb-8'>
                            <h1 className='relative sm:text-4xl text-xl font-bold uppercase'>Trailer Officiel GTA VI </h1>
                            <h2 className='text-xs sm:text-lg text-center'>Disponible en 2025. </h2>
                        </div>

                        <div className='flex justify-center'>
                            <iframe className='rounded shadow-xl shadow-black' width="1280" height="720" src="https://www.youtube.com/embed/QdBZY2fkU-0" title="Grand Theft Auto VI Trailer 1"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>

                        <div className='flex flex-col justify-start items-start sm:items-center  gap-2 mt-8 mb-8'>
                            <h1 className='relative sm:text-4xl text-xl font-bold uppercase'>Catégories Top Loots </h1>
                            <h2 className='text-xs sm:text-lg text-center'>Choisis la section que tu recherches. </h2>
                        </div>

                        <div className='containerLoot grid sm:grid-cols-2 grid-cols-1 gap-4'>
                            <a href="/Siege-gaming" target="_blank" rel="noopener noreferrer">
                              <div className='relative flex items-end duration-0 transition hover:duration-500 hover:brightness-90 hover:shadow-md hover:shadow-black'>
                              <div className='absolute flex flex-col justify-start'>
                                    <h1 className='sm:text-3xl text-white sm:p-2 mx-2 rounded font-bold'>Chaises Gaming</h1>
                                    <div className=' flex gap-2 p-2'>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Tissu</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Cuir</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Ergo</span>
                                    </div>
                                </div>
                               <img className="" src={require('../assets/gamer-chair.avif')} alt="pub"/>
                              </div>
                            </a>

                            <a  className="" href="" target="_blank" rel="noopener noreferrer">
                                <div className='relative flex items-end duration-0 transition hover:duration-500 hover:brightness-90 hover:shadow-md hover:shadow-black'>
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
                              <div className='relative flex items-end duration-0 transition hover:duration-500 hover:brightness-90 hover:shadow-md hover:shadow-black'>
                                <div className='absolute flex flex-col justify-start'>
                                    <h1 className='sm:text-3xl text-white sm:p-2 mx-2 rounded font-bold'>Jeux vidéos</h1>
                                    <div className=' flex gap-2 p-2'>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Xbox</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Ps5</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Switch</span>
                                    </div>
                                </div>
                                    <img className="" src={require('../assets/gta3.avif')} alt="pub"/>
                              </div>
                            </a>

                            <a href="/Bureaux-gaming" target="_blank" rel="noopener noreferrer">
                              <div className='relative flex items-end duration-0 transition hover:duration-500 hover:brightness-90 hover:shadow-md hover:shadow-black'>
                              <div className='absolute flex flex-col justify-start'>
                                    <h1 className='sm:text-3xl text-white sm:p-2 mx-2 rounded font-bold'>Bureaux Gaming</h1>
                                    <div className=' flex gap-2 p-2'>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Carbone</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Robuste</span>
                                      <span className='text-white  border-2 p-1 text-xs bg-black rounded'>Réglable</span>
                                    </div>
                                </div>
                                    <img className="" src={require('../assets/desk-gaming.jpg')} alt="pub"/>
                              </div>
                            </a>
                        </div>

                        <div className='flex flex-col justify-start items-start sm:items-center  gap-2 mt-8 mb-8'>
                            <h1 className='relative sm:text-4xl text-xl font-bold uppercase'>Les tips de pros </h1>
                            <h2 className='text-xs sm:text-lg text-center'>Lis nos articles pour te guider dans tes choix.</h2>
                        </div>

                        <div className='w-full grid sm:grid-cols-3 gap-4 items-center border-2 border-gray-100'>
                           
                            <a href='/Guide-pc'>
                            <div className='w-full sm:mt-8 mt-4 gap-4 sm:mb-8 flex flex-col items-center border-2 border-gray-100 bg-white rounded p-4'>
                                    <img

                                        width="300px" height="100px"
                                        className='montage-pc wallpaper2 rounded-xl w-full h-auto'
                                        src={require('../assets/black-pc.avif')}
                                        alt="comment choisir son bureau gaming"
                                    />
                                    <h1 className='font-bold uppercase'>Comment choisir ses composants pc </h1>
                                    <div>
                                        <p>Retrouve dans ce cours article comment build un pc avec un faible et gros budget.  </p>
                                    </div>

                                </div>
                            </a>
                            <a href='/Guide-Bureaux'>
                                <div className='w-full sm:mt-8 mt-4 gap-4 sm:mb-8 flex flex-col items-center border-2 border-gray-100 bg-white rounded p-4'>
                                    <img

                                        width="300px" height="100px"
                                        className='montage-pc wallpaper2 rounded-xl w-full h-auto'
                                        src={require('../assets/gaming-desk.avif')}
                                        alt="comment choisir son bureau gaming"
                                    />
                                    <h1 className='font-bold uppercase'>Comment Choisir Son Bureau Gaming </h1>
                                     
                                    <p> Découvre une nouvelle façon de jouer avec des bureaux réglables et spacieux pour ton matériel. 
                                        
                                    </p>
                                </div>
                            </a>
                            <a href='/Guide-ig'>
                                <div className='w-full sm:mt-8 mt-4 gap-4 sm:mb-8 flex flex-col items-center border-2 border-gray-100 bg-white rounded p-4'>
                                    <img

                                        
                                        className='montage-pc wallpaper2 rounded-xl w-full h-auto'
                                        src={require('../assets/guide-ig.jpg')}
                                        alt="comment choisir son bureau gaming"
                                    />
                                    <h1 className='font-bold uppercase'>Guide achat Instant Gaming </h1>
                                    <p>Un guide d'achat facile à suivre pour acheter ses jeux au plus bas prix du marché actuel.
                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className='flex flex-col justify-start items-start sm:items-center  gap-2 mt-8 mb-8'>
                            <h1 className='relative sm:text-4xl text-xl font-bold uppercase'>Gaming News </h1>
                            <h2 className='text-xs sm:text-lg text-center'>Comme le New York Times, mais version geek.</h2>
                        </div>

                        <div className='grid sm:grid-cols-3 grid-cols-1 gap-3'>
                            <div className='bg-white mx-auto border-2 rounded flex gap-3 sm:gap-0 '>
                                <div className='flex items-center flex-col'>
                                    <div className='sm:w-full w-auto '>
                                        <img    
                                        width="100px"   
                                        height="auto"                              
                                        className='montage-pc wallpaper2 rounded '
                                        src={require('../assets/gow.webp')}
                                        alt="comment choisir son bureau gaming"
                                        />
                                    </div>
                                    <div className="mx-auto m-3 flex  flex-col items-center">
                                        <h1 className="uppercase font-bold sm:text-xl">God of war : Ragnarök</h1>
                                        <p className='p-1 text-center text-sm'>Le DLC "Valhalla" sortira le 12 Décembre 2023 !</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white border-2 flex mx-auto rounded gap-3 sm:gap-0'>
                                <div className=' flex items-center flex-col'>
                                    <div className='sm:w-full w-auto'>
                                        <img    
                                        width="100px"   
                                        height="auto"                              
                                        className='montage-pc wallpaper2 rounded '
                                        src={require('../assets/marvel2.webp')}
                                        alt="comment choisir son bureau gaming"
                                        />
                                    </div>
                                    
                                    <div className="mx-auto m-3 flex flex-col items-center">
                                        <h1 className="uppercase font-bold sm:text-xl">Marvel's Spider-man 2</h1>
                                        <p className='p-1 text-center text-sm'>Le jeu n'a remporté aucun prix lors des game Awards..!</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white border-2 rounded mx-auto flex gap-3 sm:gap-0'>
                               <div className='flex items-center flex-col'>
                                    <div className='sm:w-full w-auto'>
                                        <img    
                                        width="100px"   
                                        height="auto"                              
                                        className='montage-pc wallpaper2 rounded'
                                        src={require('../assets/gta-6.webp')}
                                        alt="comment choisir son bureau gaming"
                                        />
                                    </div>
                                    <div className="mx-auto m-3 flex flex-col items-center">
                                        <h1 className="uppercase font-bold sm:text-xl">GTA VI</h1>
                                        <p className='p-1 text-center text-sm'>Les graphismes du jeu seraient aussi réalistes que son trailer !</p>
                                    </div>
                               </div>
                            </div>
                                {/* <ProductCarousel/> */}

                        </div>

                    </div>
                </div>
        </main>
        <Footer/>
        </>
    );
}