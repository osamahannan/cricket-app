import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000, once: true })
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Hello World 1</h1>
      </div>
      <div data-aos="fade-up" className="container">
        <h1>Hello World 2</h1>
      </div>
      <div data-aos="fade-left" className="container">
        <h1>Hello World 3</h1>
      </div>
      <div data-aos="fade-right" className="container">
        <h1>Hello World 4</h1>
      </div>
      <div data-aos="fade-left" className="container">
        <h1>Hello World 5</h1>
      </div>
      <div data-aos="fade-up" className="container">
        <h1>Hello World 6</h1>
      </div>
    </div>
  );
}

export default App;
