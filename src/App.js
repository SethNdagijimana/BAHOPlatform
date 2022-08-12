import React from "react";
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
// import Toppage from "./components/pages/Top-page/index";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Contact from "./components/pages/contact/Contact";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import Dashboard from "./components/dashboard/homeDashboard/Dashboard";


function App() {
  return (
    <div className="app">
      
     
      <Router>
        {/* <Home /> */}
      <Navbar />
  
        <Routes>
        <Route path ="/" element={<Home />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path = "/login" element ={<Login />} />
          <Route path ="/signup" element ={<Signup />} />
          <Route path= "/dashboard" element ={<Dashboard />} />
        </Routes>
      </Router>

      {/* <About /> */}
      
    </div>
  );
}

export default App;
