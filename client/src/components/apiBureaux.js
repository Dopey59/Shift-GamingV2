import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import ReactPaginate from 'react-paginate';
import Navbar from './navbar';
import Footer from './footer';

function ApiBureaux() {
    // Pagination Params
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12; // Nombre d'articles par page
    const affiliateLink = 'https://track.effiliation.com/servlet/effi.click?id_compteur=22917775'; // Votre lien affilié

    const [parsedData, setParsedData] = useState({ data: [], bureaux: [] });

    const fetchData = async () => {
        const apiUrl = 'https://products.effinity.fr/product-output/output/22917774?apikey=eqs63kY4bEXDmeLOCmwsnOakFpt8LlSR';

        try {
            const response = await axios.get(apiUrl);
            const parsed = Papa.parse(response.data, { header: true, skipEmptyLines: true });
            const dataWithAffiliateLinks = parsed.data.map(item => {
                item.link = (item.link);
                return item;
            });

            // Filtrer les bureaux
            const bureauxData = dataWithAffiliateLinks.filter(item => item.category.toLowerCase() === 'bureaux');

            setParsedData({ data: dataWithAffiliateLinks, bureaux: bureauxData });
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API :', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (parsedData.bureaux.length > 0) {
            setPageCount(Math.ceil(parsedData.bureaux.length / itemsPerPage));
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            setData(parsedData.bureaux.slice(startIndex, endIndex));
        }
    }, [currentPage, parsedData.bureaux]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <Navbar />
            <div className="relative w-full h-auto bg-white py-10 ">
                <div className='sm:mt-14 mt-8 flex flex-col gap-3 text-center'>
                    <h1 className='sm:text-3xl uppercase font-bold'>Enfin des bureaux à la hauteur de ton niveau</h1>
                    <h3 className='sm:text-xl text-xs'>*Profite également de <span className='text-indigo-500'>3% de réduction</span> avec le code : REKT03</h3>
                </div>
                <div className="grid sm:grid-cols-4 p-4 gap-6 sm:gap-0 grid-cols-1">
                    {data.map(item => (
                        <div className="sm:p-8 flex justify-center">
                            <div className="flex flex-col  border-2 border-gray-200 hover:shadow-md hover:shadow-gray-500 rounded ">
                                <div className="flex flex-col w-full h-auto justify-center items-center bg-gray-100 rounded" key={item.id}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <img className="" width="100%" height="auto" src={item.image_link} alt={item.title} />
                                    </a>
                                </div>
                                <div className='flex  flex-col items-start p-4 gap-2'>
                                    <h2 className="text-sm font-bold">{item.title}</h2>
                                    <p className='text-xs text-green-500 font-bold border-2 p-1 rounded bg-green-100/50 border-green-500'>Livré avant noël</p>
                                    <p className="text-sm font-bold text-indigo-600">{item.price}€</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <ReactPaginate
                    className="flex justify-between p-6"
                    previousLabel={'Précédent'}
                    nextLabel={'Suivant'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'activePagi'}
                />
            </div>
            <Footer />
        </>
    );
}

export default ApiBureaux;
