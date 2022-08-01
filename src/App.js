import React from "react";
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/pages/about/About";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Contact from "./components/pages/contact/Contact";
// import Login from "./components/pages/login/Login";


function App() {
  return (
    <div className="app">

     
      <Router>
      <Navbar />
      {/* <Home /> */}
        <Routes>
        <Route path ="/home" exact element={<Home />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/contact" element={<Contact />} />
        </Routes>
      </Router>

      {/* <About /> */}
      
    </div>
  );
}

export default App;
