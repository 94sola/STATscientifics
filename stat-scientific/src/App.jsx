import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/landingpage/home";
import Fatty from "./components/section/Fatty-Acid/fattyacid";
import Amino from "./components/section/Amino/amino";
import Phenolic from "./components/section/Phenolic/phenolic";
import Product from "./components/section/Product/product";
import Vitamin from "./components/section/Vitamin/vitamin";
import Faq from "./components/landingpage/faq";
import Contact from "./components/landingpage/contact";
import About from "./components/layout/About/abouts";


import "./index.css";


function App() {
  return (
    <div className="max-w-full min-h-screen overflow-x-hidden">

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fattyacid" element={<Fatty />} /> 
          <Route path="/amino" element={<Amino />} />
          <Route path="/phenolic" element={<Phenolic />} />
          <Route path="/product" element={<Product />} />
          <Route path="/vitamin" element={<Vitamin />} />    
        </Routes>

        <Footer />

        
      </Router>

    </div>
  );
}

export default App;