import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/DH8xwr5H/html-noisy-404-page-template.jpg')",
      }}
    >
        <img className="w-fit md:w-lg" src="https://i.ibb.co.com/5xRXfttJ/download-removebg-preview-1.png" alt="" />
      <h1 className="text-primary text-4xl md:text-6xl xl:text-7xl 2xl:text-9xl text-shadow-lg text-shadow-secondary font-bold drop-shadow-lg">404 - Page Not Found</h1>
      <p className="text-base-200 text-lg md:text-3xl xl:text-4xl text-shadow-sm text-shadow-secondary font-semibold mt-5 md:mt-10">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">
            <button className='cursor-pointer text-white text-xl xl:text-2xl font-bold bg-secondary rounded py-2 xl:py-3 px-4 xl:px-7 mt-4 md:mt-8'>Go Back Home</button>
            </Link>
    </div>
  );
};

export default ErrorPage;
