import React, { useState } from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";
import FullHeader from "./components/header/FullHeader";
import AboutUs from "./page/aboutUs/AboutUs";
import Blog from "./page/blog/Blog";
import BlogDetails from "./page/blogDetails/BlogDetails";
import Contact from "./page/contact/Contact";
import ForexCalendar from "./page/forexCalendar/ForexCalendar";
import Home from "./page/home/Home";
import LiveChart from "./page/liveChart/LiveChart";
import LoginPage from "./page/loginPage/LoginPage";
import SignUp from "./page/signUp/SignUpPage";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import VerifyAccount from "./components/verifyAccount/VerifyAccount";


const App = () => {
  const [value, setValue] = useState('');
  const [user, setUser] = useState('');
  console.log(user);

  
  return (
    <>
      <FullHeader user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/live" element={<LiveChart/>}></Route>
        <Route path="/live" element={<LiveChart/>}></Route>
        <Route path="/calendar" element={<ForexCalendar/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>

        <Route path="/blog-details" element={<BlogDetails/>}></Route>
        <Route path="/login" element={<LoginPage user={user} setUser={setUser} />}></Route>
        <Route path="/verify" element={<VerifyAccount value={value}/>}></Route>
        <Route path="/signup" element={<SignUp value={value} setValue={setValue}/>}></Route>pp
      </Routes>
      <Footer/>
      <ToastContainer />
      
    </>
  );
};

export default App;
