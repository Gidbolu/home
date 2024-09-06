import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import ScrollToTop from './component/pages/ScrollToTop';
import Navbar from './component/pages/navbar';
import Home from './component/pages/home';
import Middlefooter from './component/pages/middlefooter'
import About from './component/pages/about'
import Contact from './component/pages/contact';
import Courses from './component/pages/Courses';
import Productmanagement from './component/pages/productmanagement';
import Dataanalysis from './component/pages/dataanalysis'
import Uiuxdesign from './component/pages/uluxdesign'
import Digitalmarketing from './component/pages/digitalmarketing'
import Webdevelopment from './component/pages/webdevelopment'




function App() {
  return (
    

    <Router basename='/index'>
      <div>
        
          <Navbar/>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Courses" element={<Courses/>} />
            <Route path="/Productmanagement" element={<Productmanagement/>} />
            <Route path="/Dataanalysis" element={<Dataanalysis/>} />
            <Route path="/Uiuxdesign" element={<Uiuxdesign/>} />
            <Route path="/Digitalmarketing" element={<Digitalmarketing/>} />
            <Route path="/Webdevelopment" element={<Webdevelopment/>} />
          </Routes>

          <Middlefooter/>
        
        
      </div>
        
        
        
        

      </Router>
    
  );
}

export default App;
