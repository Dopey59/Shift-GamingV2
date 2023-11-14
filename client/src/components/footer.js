export default function Footer(){
    return(
      <>
      
      <div className="relative bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Title --> */}
      <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
        <h2 className="text-gray-600 sm:w-auto ">Nos partenaires nous font confiance et des milliers d'entre vous aussi.</h2>
      </div>
      {/* <!-- End Title --> */}

      <div className="flex justify-center items-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
        
      <img  width="100%" height="auto" alt="logo instant gaming" className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" src={require('../assets/bannier-ig.png')}></img>
        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mt-3 mx-auto sm:mx-0 text-gray-500" viewBox="163.5 263.1 285 85.8" xmlns="http://www.w3.org/2000/svg"><g clipRule="evenodd" fillRule="evenodd"><path d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z" fill="#f90"/><path d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z" fill="#f90"/><path d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z"/></g></svg>
        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" height="750" viewBox="-.001 -1.13797229 87.486 26.0649723" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m38.313 9.88a7.08 7.08 0 0 0 -7.08 7.081v7.966h19.869l2.818-5.31h-17.13v-2.13a2.298 2.298 0 0 1 2.298-2.298h11.174a7.523 7.523 0 1 0 0-15.047l-13.298.003a5.31 5.31 0 0 0 -5.31 5.31h18.221a2.245 2.245 0 0 1 2.262 2.154 2.21 2.21 0 0 1 -2.208 2.271z" fill="#555e63"/><path d="m12.717 19.603a7.068 7.068 0 0 1 0-14.137l14.349-.01v-5.312l-14.687.01a12.38 12.38 0 0 0 0 24.76l14.687.011v-15.045h-15.932v5.311h10.375v4.425z" fill="#f05f00"/><g fill="#0084c1"><path d="m71.557 21.913h-.855a1.507 1.507 0 1 0 0 3.014h.855a1.507 1.507 0 0 0 0-3.014zm-.03 2.384h-.794a.877.877 0 0 1 0-1.754h.793a.877.877 0 0 1 0 1.754zm-5.979-.877a1.508 1.508 0 0 0 1.507 1.506h1.722v-.63h-1.691a.877.877 0 0 1 0-1.753h1.691v-.63h-1.722a1.508 1.508 0 0 0 -1.507 1.507zm10.851-1.507-.657 1.805-.657-1.805h-.832l-1.117 3.013h.709l.824-2.314.734 2.017h.678l.734-2.017.824 2.314h.708l-1.116-3.013z"/><circle cx="64.771" cy="24.515" r=".412"/><path d="m75.97 3a6.127 6.127 0 0 0 -1.703-2.063 4.75 4.75 0 0 0 -2.891-.937 4.523 4.523 0 0 0 -2.815.937 6.127 6.127 0 0 0 -1.704 2.063c-4.642 8.842-11.592 21.927-11.592 21.927h6.343l9.767-18.713 4.59 8.794h-7.067l2.492 4.758h7.059l2.693 5.16h6.343s-6.873-13.083-11.515-21.926z"/></g></svg>
        <a href="https://track.effiliation.com/servlet/effi.click?id_compteur=22918210" target="_blank">
          <img width="14px" height="auto" className="py-3 lg:py-5 w-414 h-auto mx-auto sm:mx-0 text-gray-500" src="https://track.effiliation.com/servlet/effi.show?id_compteur=22918210" alt="pub" border="0"/>
        </a>
        <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" viewBox="0 0 165.99999999999997 49.4" xmlns="http://www.w3.org/2000/svg" width="2500" height="744"><g fill="#bf0000"><path d="M133.5 41.4H33.2l8 8zM149.6 36.3v-16c0-3 2.1-5.5 5.1-5.5s5.1 2.5 5.1 5.5v16h6.2v-16c0-6.6-4.5-11.9-11.1-11.9-3 0-5.3 1.7-5.3 1.7V9h-6.2v27.2h6.2zM129.1 8.3c-7.2 0-12.3 6.3-12.3 14.3 0 8.4 6.4 14.3 12.9 14.3 3.3 0 7.4-1.1 10.9-6.1l-5.5-3.2c-4.2 6.2-11.3 3.1-12.1-3.2h17.8c1.6-9.6-4.7-16.1-11.7-16.1zm5.4 10.8h-11.1c1.3-6.3 9.9-6.7 11.1 0z"/><path d="M114.8 29.8c-.6.4-1.3.7-2.1.7-1 0-2.9-.8-2.9-3.3V15.5h5.3V9h-5.3V2.2h-6.2V9h-3.3v6.5h3.3v11.7c0 6.1 4.6 9.7 9.2 9.7 1.7 0 4.1-.6 6-1.7zM92 9v16c0 3-2.1 5.5-5.1 5.5S81.8 28 81.8 25V9h-6.2v16c0 6.6 4.5 11.9 11.1 11.9 3 0 5.3-1.7 5.3-1.7v1h6.2V9z"/><path d="M64 21.8L74.6 9H66l-7.5 9.5V0h-6.3v36.3h6.3V25.1l9.2 11.2h8.6zM42.5 9v1.2C40.6 9 39 8.3 36.7 8.3c-7 0-12.4 6.4-12.4 14.3s5.3 14.3 12.4 14.3c2.3 0 4-.7 5.8-1.9v1.2h6.2V9zm-5.9 21.4c-3.5 0-6-3.4-6-7.7s2.5-7.7 6-7.7 5.9 3.4 5.9 7.7c.1 4.3-2.4 7.7-5.9 7.7z"/><path d="M6.5 36.3V25.7H11l7.9 10.5H27l-9.6-12.7c3-2.1 4.9-5.6 4.9-9.6 0-6.5-5.3-11.7-11.7-11.7H0v34h6.5zm0-27.6h4.2c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3H6.5z"/></g></svg>        </div>
    </div>
        <footer class="relative bg-emerald-300 w-full h-auto py-10 px-4 sm:px-6 lg:px-8 mx-auto">
  {/* <!-- Grid --> */}
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
    <div class="col-span-full hidden lg:col-span-1 lg:block">
      <a class="flex-none text-xl font-semibold text-zinc-900" href="#" aria-label="Brand">Shift Gaming</a>
      <p class="mt-3 text-xs sm:text-sm text-zinc-800">© 2023 Tous droits réservés.</p>
    </div>
    {/* <!-- End Col --> */}

    <div>
      <h4 class="text-xs font-bold text-slate-900 uppercase">Product</h4>

      <div class="mt-3 grid space-y-3 text-sm">
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Pricing</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Changelog</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Docs</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Download</a></p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div>
      <h4 class="text-xs font-semibold text-slate-900 uppercase">Company</h4>

      <div class="mt-3 grid space-y-3 text-sm">
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">About us</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Blog</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Careers</a> <span class="inline text-blue-600 dark:text-blue-500">— We're hiring</span></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Customers</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Newsroom</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Sitemap</a></p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div>
      <h4 class="text-xs font-semibold text-slate-900 uppercase">Resources</h4>

      <div class="mt-3 grid space-y-3 text-sm">
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Community</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Help & Support</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">eBook</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">What's New</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Status</a></p>
      </div>
    </div>
    {/* <!-- End Col --> */}

    <div>
      <h4 class="text-xs font-semibold text-slate-900 uppercase">Developers</h4>

      <div class="mt-3 grid space-y-3 text-sm">
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Api</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Status</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">GitHub</a> <span class="inline text-blue-600 dark:text-blue-500">— New</span></p>
      </div>

      <h4 class="mt-7 text-xs font-semibold text-slate-900 uppercase">Industries</h4>

      <div class="mt-3 grid space-y-3 text-sm">
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Financial Services</a></p>
        <p><a class="inline-flex gap-x-2 text-indigo-700 font-semibold" href="#">Education</a></p>
      </div>
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}

  <div class="pt-5 mt-5 border-t border-zinc-500">
    <div class="sm:flex sm:justify-between sm:items-center">
      <div class="flex items-center gap-x-3">
        {/* <!-- Language Dropdown --> */}
        <div class="hs-dropdown relative inline-flex [--placement:top-left]">
          <button id="footer-language-dropdown" type="button" class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border bg-zinc-900 text-white">
            <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
              <g fill-rule="evenodd">
                <g stroke-width="1pt">
                  <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                  <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                </g>
                <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
                <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/>
              </g>
            </svg>
            English (US)
            <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <div class="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2" aria-labelledby="footer-language-dropdown">
            <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm hover:bg-indigo-500 hover:text-white" href="#">
              <svg class="w-3.5 h-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                <g fill-rule="evenodd">
                  <g stroke-width="1pt">
                    <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                    <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                  </g>
                  <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
                  <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/>
                </g>
              </svg>
              English (US)
            </a>
            <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm hover:bg-indigo-500 hover:text-white" href="#">
              <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
                <path d="M0 0h512v170.7H0z"/>
                <path fill="#d00" d="M0 170.7h512v170.6H0z"/>
              </svg>
              Deutsch
            </a>
            <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm hover:bg-indigo-500 hover:text-white" href="#">
              <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-dk" viewBox="0 0 512 512">
                <path fill="#c8102e" d="M0 0h512.1v512H0z"/>
                <path fill="#fff" d="M144 0h73.1v512H144z"/>
                <path fill="#fff" d="M0 219.4h512.1v73.2H0z"/>
              </svg>
              Dansk
            </a>
            <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm hover:bg-indigo-500 hover:text-white" href="#">
              <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                <g fill-rule="evenodd" stroke-width="1pt">
                  <path fill="#fff" d="M0 0h512v512H0z"/>
                  <path fill="#009246" d="M0 0h170.7v512H0z"/>
                  <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/>
                </g>
              </svg>
              Italiano
            </a>
            <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm hover:bg-indigo-500 hover:text-white" href="#">
              <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-cn" viewBox="0 0 512 512">
                <defs>
                  <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"/>
                </defs>
                <path fill="#de2910" d="M0 0h512v512H0z"/>
                <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" href="#a"/>
                <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" href="#a"/>
                <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" href="#a"/>
                <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" href="#a"/>
                <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" href="#a"/>
              </svg>
              中文 (繁體)
            </a>
          </div>
        </div>
        {/* <!-- End Language Dropdown --> */}

        <div class="space-x-4 text-sm ml-4">
          <a class="inline-flex gap-x-2 text-zinc-900 font-semibold" href="#">Terms</a>
          <a class="inline-flex gap-x-2 text-zinc-900 font-semibold" href="#">Privacy</a>
          <a class="inline-flex gap-x-2 text-zinc-900 font-semibold" href="#">Status</a>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="mt-3 sm:hidden">
          <a class="flex-none text-xl font-semibold text-zinc-900" href="#" aria-label="Brand">Shift Gaming</a>
          <p class="mt-1 text-xs sm:text-sm text-zinc-800">© 2023 Tous droits reservés.</p>
        </div>

        {/* <!-- Social Brands --> */}
        <div class="space-x-4">
          <a class="inline-block text-zinc-900" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
          <a class="inline-block text-zinc-900" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a class="inline-block text-zinc-900" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
            </svg>
          </a>
        </div>
        {/* <!-- End Social Brands --> */}
      </div>
      {/* <!-- End Col --> */}
    </div>
  </div>
</footer>
      </>
    )
}