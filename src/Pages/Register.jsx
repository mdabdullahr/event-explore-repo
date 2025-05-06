import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div data-aos="zoom-in" className="flex justify-center items-center mt-20">
      <form className="fieldset  w-sm lg:w-md bg-gray-800 px-5 py-8 rounded-2xl border border-gray-700">
        <h3 data-aos="zoom-in" className="text-primary font-bold text-2xl text-center mb-5">Register Now!</h3>

        {/* Name */}
        <label className="label text-accent text-lg ">Full Name</label>
        <input 
        type="text" 
        className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12" 
        placeholder="Enter Your Full Name" />

        {/* Photo URL */}
        <label className="label text-accent text-lg mt-2">Photo URL</label>
        <input 
        type="text" 
        className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12" 
        placeholder="Enter Your PhotoURL" />

        {/* Email */}
        <label className="label text-accent text-lg mt-2">Email</label>
        <input 
        type="email" 
        className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12" 
        placeholder="Enter Your Email" />

        {/* Password */}
        <label className="label text-accent text-lg mt-2">Password</label>
        <input
          type="password"
          className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12"
          placeholder="Enter Your Password"
        />

        <button data-aos="zoom-in" type="submit" className="bg-secondary text-primary text-lg font-semibold rounded-xl cursor-pointer mt-5 h-12">Register</button>

      <p className="text-lg text-accent mt-4 text-center">
        Already Have An Account ? 
        <Link className="text-secondary underline font-semibold" to="/login">  Login</Link>
        </p>
      </form>

      
    </div>
    );
};

export default Register;