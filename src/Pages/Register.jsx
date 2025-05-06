import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const {createUser,setUser,updateUser} = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
  
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
  
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password).then(result => {
      const user = result.user;
      updateUser({displayName: name, photoURL: photo}).then(()=>{
        setUser({...user, displayName: name, photoURL: photo});
        navigate("/");
        toast.success("User Register Successfully");
      }).catch(error => {
        console.log(error);
        setUser(user);
      })
    }).catch(error => {
      const errorMessage = error.message;
      alert(errorMessage);
    })

  }
    return (
        <div data-aos="zoom-in" className="flex justify-center items-center mt-20">
      <form onSubmit={handleRegister} className="fieldset  w-sm lg:w-md bg-gray-800 px-5 py-8 rounded-2xl border border-gray-700">
        <h3 data-aos="zoom-in" className="text-primary font-bold text-2xl text-center mb-5">Register Now!</h3>

        {/* Name */}
        <label className="label text-accent text-lg ">Full Name</label>
        <input 
        required
        name='name'
        type="text" 
        className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12" 
        placeholder="Enter Your Full Name" />

        {/* Photo URL */}
        <label className="label text-accent text-lg mt-2">Photo URL</label>
        <input 
        required
        name='photo'
        type="text" 
        className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12" 
        placeholder="Enter Your PhotoURL" />

        {/* Email */}
        <label className="label text-accent text-lg mt-2">Email</label>
        <input 
        required
        name='email'
        type="email" 
        className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12" 
        placeholder="Enter Your Email" />

        {/* Password */}
        <label className="label text-accent text-lg mt-2">Password</label>
        <input
          required
          name='password'
          type="password"
          className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12"
          placeholder="Enter Your Password"
        />
        {
          passwordError && <p className='text-secondary text-lg'>{passwordError}</p>
        }

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