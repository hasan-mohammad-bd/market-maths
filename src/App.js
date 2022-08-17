import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import FullHeader from "./components/header/FullHeader";
import Home from "./page/home/Home";


const App = () => {
  return (
    <>
      <FullHeader/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
