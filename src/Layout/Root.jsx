import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Aos from "aos";
import 'aos/dist/aos.css';
import Loader from "../Pages/Loader";

const Root = () => {
  const {state} = useNavigation();

  useEffect(()=>{
    Aos.init({
      duration: 1000,
      once: true
    })
  },[])
  return (
    <div className="bg-gray-900">
      <ScrollToTop></ScrollToTop>
        <header>
            <Navbar></Navbar>
        </header>
        <main className="min-h-[calc(100vh-259px)] overflow-y-auto">
            {state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
        </main>
        <footer>
            <Footer></Footer>
        </footer>
        <ToastContainer position="top-left"/>
    </div>
  );
};

export default Root;
