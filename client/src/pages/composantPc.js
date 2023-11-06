import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Fade } from "react-awesome-reveal";

export default function CategoriePc(){
    return(
      <>
      <Navbar/>
      <Fade>
        {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col  gap-2 sm:gap-6 sm:py-20 py-2 ">
            <h1 className='sm:text-3xl font-semibold'> | Recherche par composant PC</h1>
            <p className='text-gray-400 mx-4 text-sm'>A noter : Les détails seront bientôt disponibles</p>
        </div>
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl  border-gray-200">
            <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
            <img 
            height="auto" width="full" 
            className="rounded-xl h-52 w-full"
              alt="Carte mère" 
              src="https://images.unsplash.com/photo-1674741382863-7e26f78a7fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80">
            </img>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                Cartes mères
              </span>
              <h3 className="text-xl text-black font-semibold">
                MSI / ASUS...
              </h3>
              <p className="mt-3 text-gray-500">
                Choisis la carte mère qui te conviens, adapté à ta configuration..
              </p>
            </div>
            <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
              <a className="w-full py-3 px-4 hover:bg-blue-600  inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="#">
                Détails
              </a>
              <a className="w-full py-3 px-4 hover:bg-blue-600  inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=b4b7259d1b06528a66b0ea00386cf40e&camp=1642&creative=6746&index=computers&keywords=carte mere gaming">
                Voir
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl border-gray-200">
            <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
            <img 
            height="auto" width="full" 
            className="rounded-xl h-52 w-full"
              alt="carte grapgique RTX Nvidia ou amd" 
              src="https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
            </img>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                Cartes Graphiques
              </span>
              <h3 className="text-xl text-black font-semibold">
                RTX / Nvidia / AMD..
              </h3>
              <p className="mt-3 text-gray-500">
                Libère la pleine puissance avec la nouvelle carte graphique de ton choix..
              </p>
            </div>
            <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
              <a className="w-full hover:bg-blue-600  py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="#">
                Détails
              </a>
              <a className="w-full hover:bg-blue-600  py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=9b538baa7c68625deb064ea1db366cb2&camp=1642&creative=6746&index=computers&keywords=carte graphique">
                Voir
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl  border-gray-200">
            <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
            <img 
            height="auto" width="full" 
            className="rounded-xl h-52 w-full"
              alt="Ventilateurs boitiers pc gamer" 
              src="https://images.unsplash.com/photo-1654946541250-ab9b9a069019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
            </img>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                Ventilateurs Boîtiers PC 
              </span>
              <h3 className="text-xl text-black font-semibold">
              Corsaire / CoolerMaster..
              </h3>
              <p className="mt-3 text-gray-500">
                Customise ton système de refroidissement pour éviter la surchauffe..
              </p>
            </div>
            <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
              <a className="w-full py-3 hover:bg-blue-600 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="#">
                Détails
              </a>
              <a className="w-full py-3 hover:bg-blue-600 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=c8b684595ebdf4af4d90d782263994df&camp=1642&creative=6746&index=computers&keywords=ventilateur_boitier_pc">
                Voir
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl  border-gray-200">
            <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
            <img 
            height="auto" width="full" 
            className="rounded-xl h-52 w-full"
              alt="RAM pc " 
              src="https://images.unsplash.com/photo-1601046885687-b7bdf1306274?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
            </img>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                Barettes de RAM
              </span>
              <h3 className="text-xl text-black font-semibold">
                DDR4 / DDRR5 / DDR6..
              </h3>
              <p className="mt-3 text-gray-500">
                La RAM est très importante pour gérer plusieurs tâches en arrière plan..
              </p>
            </div>
            <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
              <a className="w-full hover:bg-blue-600  py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="#">
                Détails
              </a>
              <a className="w-full hover:bg-blue-600 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=1c1a9e8e1a18fd9d88273c7dc56c83e8&camp=1642&creative=6746&index=computers&keywords=ram">
                Voir
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl  border-gray-200">
            <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
            <img 
            height="auto" width="full" 
            className="rounded-xl h-52 w-full"
              alt="Boîtier pc gaming" 
              src="https://images.unsplash.com/photo-1619455052599-4cded9ae462a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80">
            </img>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                Boîtiers PC
              </span>
              <h3 className="text-xl text-black font-semibold">
                Petits / Moyens / Grands
              </h3>
              <p className="mt-3 text-gray-500">
                La taille de ton boîtier est important pour la compatibiltié de tes composants..
              </p>
            </div>
            <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
              <a className="w-full py-3 hover:bg-blue-600  px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="#">
                Détails
              </a>
              <a className="w-full py-3 hover:bg-blue-600 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=0702c69b3897d8f0f20cdda54799b0d7&camp=1642&creative=6746&index=computers&keywords=boîtier pc">
                Voir
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl border-gray-200">
            <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
            <img 
            height="auto" width="full" 
            className="rounded-xl h-52 w-full"
              alt="Ventirad cpu" 
              src="https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
            </img>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                Watercooling
              </span>
              <h3 className="text-xl text-black font-semibold">
                Asus Rog / Corsair Icue..
              </h3>
              <p className="mt-3 text-gray-500">
                Le Watercooling est un type de refroidissement très efficace pour le processeur..
              </p>
            </div>
            <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
              <a className="w-full hover:bg-blue-600 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="#">
                Détails
              </a>
              <a className="w-full hover:bg-blue-600 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=337f894a4e87491157f5c9272a633cd8&camp=1642&creative=6746&index=computers&keywords=watercooling">
                Voir
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border  shadow-sm rounded-xl border-gray-200">
            <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
            <img 
            height="auto" width="full" 
            className="rounded-xl h-52 w-full"
              alt="" 
              src="https://images.unsplash.com/photo-1677086586945-ef95ab632232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80">
            </img>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
                Disques Durs
              </span>
              <h3 className="text-xl text-black font-semibold">
                SSD / NVME..
              </h3>
              <p className="mt-3 text-gray-500">
                Le disque dur est essentiel pour gérer le stockage de vos jeux, logiciels etc..
              </p>
            </div>
            <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
              <a className="w-full py-3 hover:bg-blue-600 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="#">
                Détails
              </a>
              <a className="w-full hover:bg-blue-600 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=c2e95b5550bdfcb29741ddc06555e828&camp=1642&creative=6746&index=computers&keywords=disque_dur">
                Voir
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="group flex flex-col h-full bg-white border shadow-sm rounded-xl border-gray-200">
            <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
            <img 

      height="auto" width="full" 
            className="rounded-xl h-52 w-full"
              alt="" 
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80">
            </img>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
                CPU / Processeur
              </span>
              <h3 className="text-xl text-black font-semibold">
                Ryzen / Intel
              </h3>
              <p className="mt-3 text-gray-500">
                Des processeurs dernières générations pour booster ton pc..
              </p>
            </div>
            <div className="mt-auto flex border-t divide-x divide-gray-200 border-gray-200 ">
              <a className="w-full py-3 hover:bg-blue-600 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="#">
                Détails
              </a>
              <a className="w-full py-3 hover:bg-blue-600 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 hover:border-gray-200 hover:text-white dark:focus:ring-offset-gray-800" 
                href="https://www.amazon.fr/gp/search?ie=UTF8&tag=shiftgaming-21&linkCode=ur2&linkId=3b2c91df63a5e46a4631641afc04d56a&camp=1642&creative=6746&index=computers&keywords=processeur">
                Voir
              </a>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Blog --> */}
      </Fade>
        <Footer/>
      </>
    )
}