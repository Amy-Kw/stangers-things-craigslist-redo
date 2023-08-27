// import React, { useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Post from "./componets/Post"
// import Home from "./componets/Home"
import Navbar from "./componets/Navbar"


export default function App() {
  return (
      <div>
      <h2>Stranger's Things</h2>

      <BrowserRouter>
        <div id="navbar">
            <Navbar/>
        </div>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
        
      </div>
  )
}
