import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
        <header>
            <Navbar></Navbar>
        </header>
        <main className="h-[calc(100vh-259px)] overflow-y-auto">
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  );
};

export default Root;
