export default function Navbar(){
    return(

    <header class="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-indigo-600 text-sm py-3 sm:py-0">
    <nav class="relative  w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
        <div class="flex items-center justify-between">
        <a class="flex-none text-xl font-semibold text-white" href="/" aria-label="Brand">Shift Gaming</a>
        <div class="sm:hidden">
            <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-bold bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </button>
        </div>
        </div>
        <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                <a class="font-bold text- sm:py-6 text-white " href="/Contact" aria-current="page">Contact</a>
                {/* <a class="font-bold text-white" href="#">Actus</a> */}
                <a class="font-bold text-white" href="/About">A propos</a>

                <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                    <button type="button" class="flex items-center w-full text-white font-bold">
                        Catégories
                        <svg class="ml-2 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                    </button>

                    <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                        <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                            <button type="button" class="w-full flex justify-between items-center text-sm hover:bg-indigo-500 text-white rounded-md py-2 px-3 font-bold">
                                Pc
                                <svg class="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="#">
                                Chaises Gaming
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="#">
                                Bureaux Gaming
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="/ComposantPc">
                                Composants Pc
                                </a>
                            </div>
                        </div>

                        <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                            <button type="button" class="w-full flex justify-between items-center text-sm hover:bg-indigo-500 text-white rounded-md py-2 px-3 font-bold">
                                Jeux vidéos
                                <svg class="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="#">
                                Jeux
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white font-bold hover:bg-indigo-500" href="#">
                                Cartes psn & xbox
                                </a>
                            
                            </div>
                        </div>

                        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white hover:bg-indigo-500 font-bold" href="/Faq">
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