import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000, once: true })
  }, []);

  return (
    <div className="App">
      <Router>

        <Navbar />
        <Routes>

            <Route exact path ="/" element = {<Home />} />
            
            <Route exact path ="/about" element = {<About />} />
      
            <Route exact path ="/service" element = {<Service />} />
              
            <Route exact path ="/contact" element = {<Contact />} />
               
        </Routes>

      </Router> 
    </div>
  );
}

export default App;
