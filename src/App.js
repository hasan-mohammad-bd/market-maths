import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import FullHeader from "./components/header/FullHeader";
import AboutUs from "./page/aboutUs/AboutUs";
import Blog from "./page/blog/Blog";
import BlogDetails from "./page/blogDetails/BlogDetails";
import ForexCalendar from "./page/forexCalendar/ForexCalendar";
import Home from "./page/home/Home";
import LiveChart from "./page/liveChart/LiveChart";




const App = () => {
  return (
    <>
      <FullHeader/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/live" element={<LiveChart/>}></Route>
        <Route path="/live" element={<LiveChart/>}></Route>
        <Route path="/calendar" element={<ForexCalendar/>}></Route>

        <Route path="/blog" element={<Blog/>}></Route>
        {/* demo for blog details */}
        <Route path="/blog-details" element={<BlogDetails/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
