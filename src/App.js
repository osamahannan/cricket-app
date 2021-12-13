import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Fund from "./Components/Fund";
import Team from "./Components/Team";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="App">

      <Router>

        <Header />

        <Navbar />

        <Routes>

          <Route exact path="/" element={<Home />} />

          <Route exact path="/funds" element={<Fund />} />

          <Route exact path="/team" element={<Team />} />

        </Routes>

        <Footer />


      </Router>

    </div >
  );
}

export default App;
