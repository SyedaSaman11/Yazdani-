import SongSearch from "./search";
import Navbar from "./navbar";
import React, { Component } from "react";



import "./css/index.css";
import "./css/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/search" element={<SongSearch />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

