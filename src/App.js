import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Fund from "./Components/Fund Section/Fund";
import Team from "./Components/Team";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollButton from "./Components/ScrollButton";

function App() {

  const [activeLink, setActiveLink] = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">

      <Router>

        <ScrollToTop />

        <Header showModal={showModal} />

        <Navbar showLink={activeLink} setShowLink={setActiveLink} showModal={showModal} />

        <Routes>

          <Route exact path="/" element={<Home setShowModal={setShowModal} />} />

          <Route exact path="/funds" element={<Fund setShowModal={setShowModal} />} />

          <Route exact path="/team" element={<Team showModal={showModal} setShowModal={setShowModal} />} />

        </Routes>

        <ScrollButton />

        <Footer setShowLink={setActiveLink} showModal={showModal} />

      </Router>

    </div >
  );
}

export default App;
