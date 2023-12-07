
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function EnSavoirPlus(){
    return(
        <>
        <Navbar/>
        <main className='w-full h-full bg-gray-100 flex flex-col'>
            <div className="titleAndLogo flex items-center justify-center mx-4 sm:mt-20 sm:visible invisible">
                <div className='flex flex-col gap-2 sm:gap-4 justify-center sm:items-start items-center sm:visible invisible'>
                    <h1 className='sm:text-4xl text-xs font-semibold border-2 border-pink-600 p-1 text-pink-500 rounded bg-pink-100'>Présentation Partenaire Instant Gaming</h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center sm:invisible visible'>
                <h1 className='text-2xl font-semibold border-2 border-orange-300 p-1 text-orange-500 rounded bg-orange-100'>Partenaire Instant Gaming </h1>
                <h1 className=' font-semibold border-2 border-indigo-300 p-1 text-indigo-500 rounded bg-indigo-100'>Infos/Guide </h1>
            </div>
            
            
            

                <div className='flex gap-2 mx-4 items-end justify-end '>
                    <div className='border-2 border-slate-900 p-1 text-gray-200 rounded bg-slate-800'>
                        <div className='flex gap-3'>
                            <div className='bg-green-600 flex items-center rounded-full border-2 p-1 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.8 6.91 4.82 7A6 6 0 0 0 11 17.91V20H9v2h6v-2h-2v-2.09A6 6 0 0 0 17.18 15c3-.1 4.82-2.7 4.82-7V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.22 12.08 4 9.3 4 8zm14 4.83V6h2v2c0 1.3-.22 4.08-2 4.83z"></path></svg>
                            </div>
                            <div className='flex flex-col gap-2 items-center'>
                                <h1 className='font-semibold'>Achievement unlocked</h1>
                                <h1 className=''>Infos / Guide</h1>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='mt-8 flex justify-center items-start mx-4 flex-col gap-6'>
                <h1 className='sm:text-3xl text-center mx-4'>Une bibliothèque de jeu dématériélisé à prix cassé toute l’année !</h1>
                <div className='grid sm:grid-cols-3 gap-6'>
                    <img
                        width="100%" height="auto"
                        className='wallpaper2 rounded '
                        src={require('../assets/xbox-banner.png')}
                        alt="wallpaper"
                    />

                    <img
                        width="100%" height="auto"
                        className='w-full h-auto wallpaper2 rounded'
                        src={require('../assets/playstation-banner.png')}
                        alt="wallpaper"
                    />

                    <img
                        width="100%" height="auto"
                        className='wallpaper2 rounded'
                        src={require('../assets/nintendo-banner.png')}
                        alt="wallpaper"
                    />
                </div>
            </div>
            <div className='achatExempleAC mt-4 mx-4 sm:mt-8 items-end flex flex-col sm:gap-6 gap-2'>
                <h1 className='sm:text-3xl text-center mx-4 flex'>Achat facile, clés de jeux démateriélisées + livrées instantanément :</h1>
                <img
                        width="900px" height="auto"
                        className='wallpaper2 rounded-xl p-1'
                        src={require('../assets/instant-diapo1.jpg')}
                        alt="wallpaper"
                />
            </div>
        <Footer/>
        </main>
        </>
    )
}