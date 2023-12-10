
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function GuidePc() {

    return(
        <>
    <Navbar/>
    {/* // <!-- Blog Article --> */}
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          
            {/* <!-- Content --> */}
            <div className="space-y-5 md:space-y-8 mt-14">
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold md:text-3xl text-black">Guide achat Instant Gaming</h1>

                    <p className="text-lg flex flex-col text-gray-800 
                    ">Instant Gaming, notre partenaire de confiance, est bien plus qu'une simple plateforme de vente de jeux. En tant que joueur passionné, vous recherchez la meilleure expérience de jeu sans pour autant vider votre portefeuille.
                    C'est là qu'Instant Gaming entre en scène, offrant une vaste sélection de jeux à des prix imbattables.</p>
                </div>

                <h2 className="text-xl font-bold sm:text-2xl flex flex-col text-gray-800 
                ">Découvrez Instant Gaming</h2>
                <p>Instant Gaming se démarque par sa simplicité d'utilisation et ses offres exceptionnelles. La plateforme propose une variété de jeux, des titres AAA aux perles indépendantes, le tout à des tarifs attractifs. Le processus est transparent et intuitif, vous permettant de trouver et d'acheter vos jeux préférés en quelques clics.</p>

                <figure>
                    <div className='flex items-center justify-center'>
                        <img
                            height="auto" width="full"
                            className="w-96  object-cover rounded-xl"
                            src={require('../assets/box-orange-dark.png')}
                            alt="partenaire instant gaming"
                        />              

                    </div>
                    <figcaption className="mt-3 text-sm text-center text-gray-500">
                    Partenaire Instant Gaming.
                    </figcaption>
                </figure>

                <h1 className=" text-2xl font-bold md:text-3xl
                "> Comment Fonctionne Instant Gaming</h1>

                <p className="text-lg flex flex-col text-gray-800 
                "> <span className='font-bold text-blue-600'> # Séléction variée </span> 
               Parcourez une sélection impressionnante de jeux pour toutes les plateformes, y compris PC, Xbox, PlayStation et bien d'autres.</p>

                <p className="text-lg flex flex-col text-gray-800 
                "> <span className='font-bold text-blue-600'> Prix Imbattables</span> 
               Bénéficiez de réductions incroyables allant jusqu'à 70% par rapport aux prix standard, ce qui vous permet d'économiser tout en enrichissant votre bibliothèque de jeux.</p>

                <p className="text-lg flex flex-col text-gray-800 
                "><span className='font-bold text-blue-600'> Sécurité et Fiabilité</span> 
                  Instant Gaming garantit la légitimité de chaque clé de jeu vendue, vous assurant une expérience sans tracas et sécurisée à chaque achat.</p>

                  <h1 className=" text-2xl font-bold md:text-3xl
                "> Guide d'Achat sur Instant Gaming</h1>

                <p className="text-lg flex flex-col text-gray-800 
                "><span className='font-bold text-blue-600'> Créez un Compte</span> 
                Commencez par créer un compte sur le site d'Instant Gaming. Cela vous permettra de suivre vos achats, d'accéder à des offres exclusives et de simplifier le processus de commande.</p>

                <p className="text-lg flex flex-col text-gray-800 
                "><span className='font-bold text-blue-600'> Parcourez les Offres</span>  
                 Explorez les différentes catégories de jeux disponibles. Utilisez les filtres pour affiner votre recherche en fonction de la plateforme, du genre ou des réductions.</p>

                <p className="text-lg flex flex-col text-gray-800 
                "><span className='font-bold text-blue-600'> Choisissez Votre Jeu </span>
                Une fois que vous avez trouvé le jeu de vos rêves, cliquez dessus pour obtenir plus de détails. Assurez-vous de vérifier les configurations système requises et les avis des utilisateurs.</p>
                 <p className="text-lg flex flex-col text-gray-800 

                "><span className='font-bold text-blue-600'> Ajoutez au Panier</span>  
                  Cliquez sur "Ajouter au Panier" et vérifiez votre sélection. Vous pouvez également profiter de recommandations personnalisées basées sur vos préférences de jeu.</p>
                 <p className="text-lg flex flex-col text-gray-800 
                
                "><span className='font-bold text-blue-600'> Procédez au Paiement</span>  
                Une fois que votre panier est prêt, suivez les étapes pour finaliser votre achat. Instant Gaming propose plusieurs options de paiement sécurisées.</p>

                <p className="text-lg flex flex-col text-gray-800 
                
                "><span className='font-bold text-blue-600'> Recevez Votre Clé</span>  
                 Après l'achat, vous recevrez instantanément votre clé de jeu. Suivez les instructions pour l'activer sur la plateforme correspondante.</p>

                 <p className="text-lg flex flex-col text-gray-800 
                
                "><span className='font-bold text-blue-600'> Plongez dans l'Aventure</span>  
                Téléchargez le jeu, lancez-vous dans l'aventure et profitez d'heures de divertissement.</p>
                <figure>
                    <img
                        height="auto" width="full"
                        className="w-full object-cover rounded-xl"
                        src={require('../assets/bannier-ig.png')}
                        alt="Partenaire Instant Gaming."
                    />
                    <figcaption className="mt-4 text-sm text-center text-gray-500">
                    Partenaire Instant Gaming.
                    </figcaption>
                </figure>

                <p>En résumé, Instant Gaming est bien plus qu'un simple revendeur de jeux. C'est votre portail vers des expériences de jeu abordables et passionnantes. Suivez notre guide d'achat étape par étape pour maximiser votre expérience d'achat de jeux vidéo.</p>

                <figure>
                    <figcaption className="mt-3 text-sm text-center text-gray-500">
                        www.shift-gaming.fr
                    </figcaption>
                </figure>
            </div>
            {/* <!-- End Content --> */}
        </div>
    </div>
    <Footer/>
        </>
    )
}