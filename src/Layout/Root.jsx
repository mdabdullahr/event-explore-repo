import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Root = () => {
  return (
    <div className="bg-gray-900">
      <ScrollToTop></ScrollToTop>
        <header>
            <Navbar></Navbar>
        </header>
        <main className="min-h-[calc(100vh-259px)] overflow-y-auto">
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
        <ToastContainer />
    </div>
  );
};

export default Root;
