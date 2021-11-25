import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

function App() {

  return (
    <div className="App">
      <Router>

        <Header />

        <Navbar />
        
        <Routes>

            <Route exact path ="/" element = {<Home />} />
            
            <Route exact path ="/about" element = {<About />} />
      
            <Route exact path ="/team" element = {<Team />} />
              
            <Route exact path ="/contact" element = {<Contact />} />
               
        </Routes>

      </Router> 
    </div>
  );
}

export default App;
