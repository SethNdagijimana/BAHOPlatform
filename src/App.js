import React from "react";
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Contact from "./components/pages/contact/Contact";
import Login from "./components/pages/login/Login";


function App() {
  return (
    <div className="app">
      
     
      <Router>
      <Navbar />
  
        <Routes>
        <Route path ="/home" element={<Home />} />
          {/* <Route path ="/about" element={<Impact />} /> */}
          <Route path ="/contact" element={<Contact />} />
          <Route path = "/login" element ={<Login />} />
        </Routes>
      </Router>

      {/* <About /> */}
      
    </div>
  );
}

export default App;
