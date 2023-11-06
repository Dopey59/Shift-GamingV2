import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function Faq() {
    return(
      <>
        <Navbar/>
      {/* <!-- FAQ --> */}
  <div className="w-full h-auto py-16 sm:px-6 lg:px-8 lg:py-20 mx-auto">
    {/* <!-- Title --> */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-indigo-500">F.A.Q</h2>
      <p className="mt-1 text-gray-600 dark:text-gray-500">Réponses aux questions les plus fréquentes.</p>
    </div>
    {/* <!-- End Title --> */}

    <div className="max-w-2xl mx-auto">
      {/* <!-- Accordion --> */}
      <div className="hs-accordion-group ">
        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05] active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-indigo-900 dark:text-black dark:hover:text-indigo-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
            Qu'est-ce que Shift Gaming et quel est son objectif ?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-red-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
            <p className="text-gray-800 dark:text-black">
            Shift Gaming est une plateforme partenariale dédiée aux passionnés de gaming. Notre objectif est de regrouper les meilleurs sites de gaming, de fournir des redirections vers ces sites partenaires pour profiter des offres exclusives, et de mettre en avant les meilleurs périphériques d'ordinateurs à des prix compétitifs.
            </p>
          </div>
        </div>

        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-two">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-indigo-900 dark:text-black dark:hover:text-indigo-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
            Comment puis-je profiter des offres et des promotions sur Shift Gaming ?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
            <p className="text-gray-800 dark:text-black">
              Pour profiter des offres et des promotions de nos sites partenaires, il vous suffit de naviguer sur notre plateforme, de choisir le site qui vous intéresse, et de suivre le lien de redirection. Vous serez alors dirigé vers le site partenaire pour profiter des offres en cours.</p>
          </div>
        </div>

        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-three">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-indigo-900 dark:text-black dark:hover:text-indigo-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
            Quels types de sites de gaming sont répertoriés sur Shift Gaming ?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
            <p className="text-gray-800 dark:text-black">
              Shift Gaming réunit une variété de sites de gaming, notamment des boutiques en ligne de jeux vidéo, de matériel informatique, de périphériques de gaming, et bien d'autres. Nous collaborons avec des sites renommés pour vous offrir un accès facile à leurs offres.</p>
          </div>
        </div>

        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-four">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-indigo-900 dark:text-black dark:hover:text-indigo-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
            Comment Shift Gaming choisit-il les sites partenaires ?            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
            <p className="text-gray-800 dark:text-black">
              Nous sélectionnons nos partenaires avec soin en évaluant leur réputation, la qualité de leurs produits ou services, et leur engagement envers la satisfaction de leurs clients. Nous visons à offrir à nos utilisateurs des options fiables et de haute qualité.</p>
          </div>
        </div>

        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-five">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-indigo-900 dark:text-black dark:hover:text-indigo-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
            Puis-je trouver des guides d'achat et des recommandations sur Shift Gaming ?            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
            <p className="text-gray-800 dark:text-black">
              Oui, Shift Gaming propose des guides d'achat, des critiques de produits, et des recommandations pour vous aider à prendre des décisions éclairées. Nous sommes là pour vous guider vers les meilleurs périphériques et équipements de gaming.</p>
          </div>
        </div>

        <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 dark:hs-accordion-active:bg-white/[.05]" id="hs-basic-with-title-and-arrow-stretched-heading-six">
          <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-indigo-900 dark:text-black dark:hover:text-indigo-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
            Comment puis-je contacter l'équipe de Shift Gaming en cas de questions ou de préoccupations ?
            <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-indigo-900 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
            <p className="text-gray-800 dark:text-black">
              Vous pouvez nous contacter en utilisant notre page de contact. Notre équipe est disponible pour répondre à vos questions, vous fournir des informations supplémentaires, ou vous assister dans tout ce qui concerne notre plateforme.</p>
          </div>
        </div>
      </div>
      {/* <!-- End Accordion --> */}
    </div>
  </div>
  <Footer/>
   {/* <!-- End FAQ --> */}
      
      </>
    )
}