import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Components/About';
import Navbar from './Utils/Navbar';
import Footer from './Utils/Footer';
import PNF from './Utils/PNF';
import Contact from './Components/Contact';
import FAQS from './Components/FAQS';

function App() {
  return (
    <div className="bg-black">
      <Router>
        <Navbar className="" />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/faqs' element={<FAQS />} />
          <Route path='*' element={<PNF />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
