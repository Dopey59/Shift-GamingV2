//Fichiers CSS
import './App.css';
import './index.css';

//Routes react-router
import { Route, Routes } from 'react-router-dom';

// Importer les pages du sites
import Homepage from './pages/homepage';
import About from './pages/about';
import Faq from './pages/faq';
import Contact from './pages/contact';
import GuideIg from './pages/guideIG';
import ComposantPc from './pages/composantPc';
import GuidePc from './pages/guidePc';
import GuideBureau from './pages/guideBureau';



//Importer les composants pour le site
import Plateformes from './components/platforms';
import ApiSiege from './components/api';
import ApiBureaux from './components/apiBureaux';





function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Plateformes" element={<Plateformes />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ComposantPc" element={<ComposantPc/>} />
        <Route path="/Siege-gaming" element={<ApiSiege/>} /> 
        <Route path="/Bureaux-gaming" element={<ApiBureaux/>} /> 
        <Route path="/Guide-ig" element={<GuideIg/>} /> 
        <Route path="/Guide-pc" element={<GuidePc/>} /> 
        <Route path="/Guide-bureaux" element={<GuideBureau/>} /> 
    </Routes>
  );
}
export default App;
