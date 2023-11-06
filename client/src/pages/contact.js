import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yd247in', 'template1', form.current, 'VdQ4--7AZkMyERSyS')
      .then((result) => {
        console.log(result.text);
        if (result.status === 200) {
          setIsMessageSent(true);
          notify('Message envoyé !', 'success');
        } else {
          notify('Une erreur est survenue', 'error');
        }
      })
      .catch((error) => {
        console.log(error.text);
        notify('Une erreur est survenue..', 'error');
      });
  };

  const notify = (message, type) => {
    toast(message, {
      position: 'top-right',
      type: type,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <>
      <div>
        <Navbar/>
      </div>
      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden">
        <div className=" max-w-screen-md p-24 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-auto mx-auto">
          <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
            {/* <!-- Title --> */}
            <h1 className="text-3xl text-indigo-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
              Contactez notre  <span className="text-indigo-500">team</span>
            </h1>
            <p className="mt-3 text-base text-gray-500">
              Une demande particulière ? Envoie-nous un message en remplissant le formulaire ci-dessous. 
              Notre équipe traite toutes demandes sous 48h maximum. 
            </p>
            {/* <!-- End Title --> */}

            <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Formulaire de contact</div>

            {/* <!-- Form --> */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <input type="text" id="hs-hero-name-2" placeholder="Prénom du destinataire" name="from_name" className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-slate-900 border-gray-700 text-gray-400"/>
              </div>

              <div className="mb-4">
                <input type="email" id="hs-hero-email-2" name="from_mail" placeholder="E-mail" className="py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-slate-900 border-gray-700 text-gray-400"/>
              </div>

              <div className="mb-4">
                <div>
                  <textarea id="hs-about-contacts-1" type="text" placeholder="Message" name="message" rows="4" className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"></textarea>
                </div>
              </div>

              <div className="grid">
                
                <input type="submit" onClick={notify} value="Envoyer" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 outline-none hover:cursor-pointer transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4"/>
                  <ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark" 
                  />
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>

        <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full w-auto bg-[url('https://images5.alphacoders.com/132/1327489.png')] bg-no-repeat bg-center bg-cover"></div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Hero --> */}
      <Footer/>
    </>
  );
};