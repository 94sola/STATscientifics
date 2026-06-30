import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/landingpage/home";
import Fatty from "./components/section/fattyacid";
import Amino from "./components/section/amino";


import "./index.css";


function App() {
  return (
    <div className="max-w-full min-h-screen overflow-x-hidden">

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/fattyacid" element={<Fatty />} /> 
          <Route path="/amino" element={<Amino />} />
        </Routes>

        <Footer />

        
      </Router>

    </div>
  );
}

export default App;