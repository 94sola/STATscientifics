import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/landingpage/home";

import "./index.css";


function App() {
  return (
    <div className="max-w-full min-h-screen overflow-x-hidden">

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} /> 
        </Routes>

        <Footer />

        
      </Router>

    </div>
  );
}

export default App;