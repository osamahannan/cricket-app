import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Fund from "./Components/Fund";
import Team from "./Components/Team";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollButton from "./Components/ScrollButton";

function App() {

  const [showLink, setShowLink] = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={showModal ? "App blur-active" : "App"}>

      <Router>

        <ScrollToTop smooth />

        <Header showModal={showModal} />

        <Navbar showLink={showLink} setShowLink={setShowLink} showModal={showModal} />

        <Routes>

          <Route exact path="/" element={<Home />} />

          <Route exact path="/funds" element={<Fund />} />

          <Route exact path="/team" element={<Team showModal={showModal} setShowModal={setShowModal} />} />

        </Routes>

        <ScrollButton />

        <Footer setShowLink={setShowLink} showModal={showModal} />

      </Router>

    </div >
  );
}

export default App;
