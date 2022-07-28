import React from "react";
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/pages/about/About";


function App() {
  return (
    <div className="app">

      <Navbar />
      <Home />
      <About />
      
    </div>
  );
}

export default App;
