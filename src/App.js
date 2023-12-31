import React, { useState, useEffect } from "react";
// import react roter

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Style
import "./assets/Css/loding.css";
// Pages
import Home from "./assets/Pages/Home";
import Navv from "./assets/Pages/Navv";
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <div className="preloaderr">
        <img src="../imges/logo.png" alt="logo" className="imglogo"/>
        <span class="loader"></span>
        </div>
      ) : (
        <>

      <Navv/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App