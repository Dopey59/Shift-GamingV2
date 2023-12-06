import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import ReactPaginate from 'react-paginate';
import Navbar from '../components/navbar';
import Footer from '../components/footer';



function Api() {
    //Pagination Params//
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6; // Nombre d'articles par page
    const affiliateLink = 'https://track.effiliation.com/servlet/effi.click?id_compteur=22917775'; // Votre lien affilié

    const [parsedData, setParsedData] = useState({ data: [] });

    const fetchData = async () => {
        const apiUrl = 'https://products.effinity.fr/product-output/output/22917774?apikey=eqs63kY4bEXDmeLOCmwsnOakFpt8LlSR';

        try {
            const response = await axios.get(apiUrl);
            console.log(response.data);
            console.log(parsedData.data)
            const parsed = Papa.parse(response.data, { header: true, skipEmptyLines: true });
            const dataWithAffiliateLinks = parsed.data.map(item => {
                item.link = `${affiliateLink}&url=${encodeURIComponent(item.link)}`;
                return item;
            });
            setParsedData({ data: dataWithAffiliateLinks });
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API :', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (parsedData.data.length > 0) {
            setPageCount(Math.ceil(parsedData.data.length / itemsPerPage));
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            setData(parsedData.data.slice(startIndex, endIndex));
        }
    }, [currentPage, parsedData]);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Filtrer les chaises
    const chaises = data.filter(item => item.category.toLowerCase() === 'chaises');

    // Filtrer les bureaux
    const bureaux = data.filter(item => item.category.toLowerCase() === 'bureau');
    return (
        <>
        <Navbar/>
            <div className="relative w-full h-auto bg-white py-10 ">  
            <div className='mt-14 flex justify-center items-center flex-col gap-3 '>
                <h1 className='sm:text-3xl uppercase font-bold'>Spécialement conçues pour de longues heures de Try Hard</h1>
                    <h3 className='Text-xl '>*Profite également de <span className='text-indigo-500'>3% de réduction</span> avec le code : REKT03</h3>
                    <p className='text-xs text-gray-500'>*A appliquer lors de votre passage en caisse sur le site REKT.</p>
            </div>              
                <div className="grid sm:grid-cols-4 grid-cols-1">
                    {chaises.map(item => (
                        <div className="sm:p-8 flex justify-center">
                            <div className="flex flex-col gap-4 border-2 border-gray-200 hover:shadow-md hover:shadow-gray-500 rounded items-center">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <div className="flex flex-col justify-center items-center bg-gray-100 rounded gap-4 " key={item.id}>
                                    <img className="" width="300px" height="auto" src={item.image_link} alt={item.title} />
                                </div>
                                <div className='flex  flex-col items-start p-4 gap-2'>
                                    <h2 className="text-sm font-bold">{item.title}</h2>
                                    <p className='text-xs text-green-500 font-bold border-2 p-1 rounded bg-green-100/50 border-green-500'>Livré avant noël</p>
                                    <p className="text-sm font-bold text-indigo-600">{item.price}€</p> 
                                </div>
                            </a>
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
                activeClassName={'active'}
            />
        </div>
        <Footer/>

        </>
    );
}

export default Api;