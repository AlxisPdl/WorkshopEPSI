import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Peche from './Pages/Peche';
import Bateau from './Pages/Bateau';
import Details from './Pages/Details';
import CGV from './Pages/CGV';
import Contact from './Pages/Contact';
import Mentions from './Pages/Mentions';
import Cookies from './Pages/Cookies';  
import Navbar from './Components/Navbar';

function router() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/peche" element={<Peche />} />
          <Route path="/peche/bateau" element={<Bateau />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="*" element={<h1>ERROR 404 <br /> Page not found</h1>} />
  
        </Routes>

      </BrowserRouter>
  
    );
  }
  
  export default router;