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

import { toast, ToastContainer } from 'react-toastify';
import VerifyAccount from "./components/verifyAccount/VerifyAccount";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import VerifyOtp from "./components/forgotPassword/VerifyOtp";
import NewPassword from "./components/forgotPassword/NewPassword";
import { createContext } from "react";
import { useQuery } from "react-query";
import { API_URL_WEBSITE } from "./components/common/constants";
import { useEffect } from "react";
import SingleBlog from "./page/blog/SingleBlog";
import BlogList from "./page/blog/BlogList";
export const DataContext = createContext('data');

const App = () => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [user, setUser] = useState('');
  const [home, setHome] = useState([]);
  const [home2, setHome2] = useState([]);
  const [home3, setHome3] = useState([]);
  const [aboutPage, setAboutPage] = useState([]);
  const [page, setPage] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [cat, setCat] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [id, setId] = useState('')




  useEffect(()=>{
    fetch(`${API_URL_WEBSITE}home`)
    .then(res => res.json())
    .then(data => setHome(data.data))

    fetch(`${API_URL_WEBSITE}home/api2`)
    .then(res => res.json())
    .then(data => setHome2(data.data))
    console.log(home2);

    fetch(`${API_URL_WEBSITE}home/constant`)
    .then(res => res.json())
    .then(data => setHome3(data.data))

    fetch(`${API_URL_WEBSITE}about_us`)
    .then(res => res.json())
    .then(data => setAboutPage(data.data))

    fetch(`${API_URL_WEBSITE}blog/cat`)
    .then(res => res.json())
    .then(data => setCat(data.data.category_list))

  },[])

  useEffect(()=>{
    fetch(`${API_URL_WEBSITE}blog/post?category=${currentCategory}&limit=2&page=${currentPage + 1}`)
    .then(res => res.json())
    .then(data => {
      if(data.status){
        setPage(data.total_pages);
        setBlogList(data.data)
      }
    })
  },[currentPage, currentCategory])
/*   useEffect(()=>{
    fetch(`${API_URL_WEBSITE}blog/post?category=${currentCategory}&limit=2&page=${currentPage + 1}`)
    .then(res => res.json())
    .then(data => {
      if(data.status){
        setPage(data.total_pages);
        setBlogList(data.data)
      }
    })
  },[id]) */

  return (
    <>
    <DataContext.Provider value={{home, home2, home3, aboutPage, page, blogList, setCurrentPage, currentPage, cat, setCurrentCategory}}>
    <FullHeader user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/live" element={<LiveChart/>}></Route>
        <Route path="/live" element={<LiveChart/>}></Route>
        <Route path="/calendar" element={<ForexCalendar/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/blog" element={<Blog/>}>
          <Route index element={<BlogList></BlogList>}></Route><Route path="blog-details/:id" element={<BlogList></BlogList>}></Route>
        </Route>

        <Route path="/blog-details" element={<BlogDetails/>}></Route>
        <Route path="/login" element={<LoginPage user={user} setUser={setUser} />}></Route>
        <Route path="/verify" element={<VerifyAccount value={value}/>}></Route>
        <Route path="/verifyOtp" element={<VerifyOtp value2={value2}/>}></Route>
        <Route path="/new-password" element={<NewPassword value2={value2}/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword value2={value2} setValue2={setValue2}/>}></Route>
        <Route path="/signup" element={<SignUp value={value} setValue={setValue}/>}></Route>pp
      </Routes>
      <Footer/>
      <ToastContainer />
    </DataContext.Provider>

      
    </>
  );
};

export default App;
