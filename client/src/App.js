import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Faq from './pages/faq';
import Contact from './pages/contact';
import ComposantPc from './pages/composantPc';
import Plateformes from './components/platforms';
import Apidata from './components/api';




function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Plateformes" element={<Plateformes />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ComposantPc" element={<ComposantPc/>} />
        <Route path="/Siege-gamer" element={<Apidata/>} /> 
    </Routes>
  );
}
export default App;
