import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function About() {
    return(
        <>
        <Navbar/>
    {/* // <!-- Blog Article --> */}
    <div className="w-full px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto ">
        <div className="">
            {/* <!-- Content --> */}
            <div className="space-y-5 md:space-y-8 py-12">
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold md:text-3xl text-indigo-900 ">A propos de Shift Gaming</h2>

                    <p className="text-lg flex flex-col text-gray-800 
                    ">Bienvenue sur Shift Gaming, votre destination ultime pour le monde du jeu et de la technologie. Chez Shift Gaming, nous sommes passionnés par l'univers du jeu vidéo, de la technologie et de l'innovation. Notre mission est de vous offrir une expérience unique en rassemblant les meilleurs sites de gaming et les dernières avancées technologiques, le tout sous un même toit.</p>
                </div>

                <h1 className=" text-xl font-bold md:text-2xl
                ">Ce que nous faisons :</h1>

                <p className="text-lg flex flex-col text-gray-800 
                "> <span className='font-bold text-indigo-500 '> Un Accès Facile aux Offres de Jeux : </span> 
               Shift Gaming vous connecte instantanément aux meilleures offres de jeux du marché. Nous travaillons en partenariat avec les principales plateformes de jeux pour vous garantir des prix compétitifs et des titres populaires.</p>

                <p className="text-lg flex flex-col text-gray-800 
                "> <span className='font-bold text-indigo-500 '> Guides Informatifs  (à venir): </span> 
                 Notre équipe d'experts en jeu et en technologie crée régulièrement des guides informatifs pour vous aider à prendre des décisions éclairées. Que vous soyez un joueur débutant ou chevronné, vous trouverez des conseils et des astuces pour améliorer votre expérience de jeu.</p>

                <p className="text-lg flex flex-col text-gray-800 
                "><span className='font-bold text-indigo-500 '> Matériel de Jeu :</span> 
                 Nous mettons en avant les derniers périphériques et équipements de jeu, du matériel de pointe aux options plus abordables. Vous pouvez trouver des recommandations pour des souris, claviers, casques et bien plus encore, afin d'améliorer votre setup de jeu.</p>

                <p className="text-lg flex flex-col text-gray-800 
                "><span className='font-bold text-indigo-500 '> Communauté de Joueurs (à venir) </span> 
                 Shift Gaming aura prochainement son lieu de rencontre pour les joueurs du monde entier. Bientôt, vous pourrez rejoindre notre communauté pour discuter des dernières actualités, partager des astuces et des critiques de jeux, et participer à des discussions animées.</p>

              
                <h1 className="text-lg flex flex-col font-bold text-gray-800">
                    Notre engagement :
                </h1>
                <h1 className="text-lg flex flex-col text-gray-800 
                    ">Chez Shift Gaming, nous sommes déterminés à offrir une expérience transparente, fiable et centrée sur l'utilisateur. Nous croyons en la passion du jeu et de la technologie, et nous nous efforçons de vous fournir les informations et les ressources dont vous avez besoin pour tirer le meilleur parti de votre expérience de jeu.</h1>

                <h1 className="text-lg flex flex-col font-bold text-gray-800">
                    Rejoignez-nous dès aujourd'hui et explorez l'univers fascinant du jeu et de la technologie avec Shift Gaming.
                </h1>

                <p className="text-lg flex flex-col text-gray-800 
                ">
                    Pour toute question, commentaire ou demande de partenariat, n'hésitez pas à nous contacter. Nous sommes là pour vous aider à vivre une expérience de jeu exceptionnelle.
                </p>

                <div>
                    <p className=" text-gray-200 m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-800 
                    ">
                    Bons plans
                    </p>
                    <p className=" text-gray-200 m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-800 
                    ">
                    Pc Gamer
                    </p>
                    <p className=" text-gray-200 m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-800 
                    ">
                    Astuces
                    </p>
                    <p className=" text-gray-200 m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-800 
                    ">
                    Guide
                    </p>
                </div>
            </div>
            {/* <!-- End Content --> */}
        </div>
    </div>
    <Footer/>
        </>
    )
}