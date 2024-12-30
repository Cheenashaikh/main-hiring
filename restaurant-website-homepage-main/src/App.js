
import React from "react";
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import AboutUs from './pages/aboutus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './pages/ServicesPage';
import Policies from './pages/PoliciesPage'; 
import HireMe from "./pages/hire";
import Register from "./pages/register";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/polices" element={<Policies />} />
          <Route path="hire" element={<HireMe/>}/> 
          <Route path="/register" element={<Register/>}/>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


