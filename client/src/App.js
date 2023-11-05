import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Plateformes from './components/platforms';



function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Plateformes" element={<Plateformes />} />
        {/* <Route path="/Box" element={<Box />} />
        <Route path="/GuidePc" element={<GuidePc/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ComposantPc" element={<ComposantPc/>} />
        <Route path="/RektGaming" element={<Apidata/>} />  */}
    </Routes>
  );
}
export default App;
