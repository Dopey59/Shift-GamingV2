export default function Navbar(){
    return(

    <header className="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-indigo-600 text-sm py-3 sm:py-0">
    <nav className="relative  w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
        <a className="flex-none text-xl font-semibold text-white" href="/" >Shift Gaming</a>
        <div className="sm:hidden">
            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-bold  text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all text-sm bg-slate-900 border-gray-700 hover:text-white focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </div>
        </div>
        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                <a className="font-bold text- sm:py-6 text-white " href="/Contact" aria-current="page">Contact</a>
                <a className="font-bold text-white" href="/FAQ">F.A.Q</a>
                <a className="font-bold text-white" href="/About">A propos</a>

                <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                    <button type="button" className="flex items-center w-full text-white font-bold">
                        Catégories
                        <svg className="ml-2 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="white" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10  sm:shadow-md rounded-lg p-2 bg-gray-800  sm:border border-gray-700 divide-gray-700 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5">
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="/ComposantPc">
                        Composants Pc
                        </a>

                        <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                            <button type="button" className="w-full flex justify-between items-center text-sm hover:bg-indigo-500 text-white rounded-md py-2 px-3 font-bold">
                                Offres Jeux
                                <svg className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2  sm:shadow-md rounded-lg p-2 bg-gray-800  sm:border border-gray-700 divide-gray-700 before:absolute before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="https://www.instant-gaming.com/fr/cartes-prepayees/microsoft-store/?igr=gamer-7232d0" target="_blank" rel="noopener noreferrer">
                                Microsoft store
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="https://www.instant-gaming.com/fr/cartes-prepayees/playstation-store/?igr=gamer-7232d0" target="_blank" rel="noopener noreferrer">
                                Playstation store
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="https://www.instant-gaming.com/fr/?igr=gamer-7232d0" target="_blank" rel="noopener noreferrer">
                                Jeux-videos
                                </a>
                            </div>
                        </div>

                        <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                            <button type="button" className="w-full flex justify-between items-center text-sm hover:bg-indigo-500 text-white rounded-md py-2 px-3 font-bold">
                                Confort
                                <svg className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2  sm:shadow-md rounded-lg p-2 bg-gray-800  sm:border border-gray-700 divide-gray-700 before:absolute  sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="/Siege-gaming">
                                Chaises Gaming
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="/Bureaux-gaming">
                                Bureaux Gaming
                                </a>
                            </div>
                        </div>

                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white hover:bg-indigo-500 font-bold" href="/Faq">
                        F.A.Q
                        </a>  
                    </div>
                </div>
            </div> 
        </div>
    </nav>
    </header>
    )
}