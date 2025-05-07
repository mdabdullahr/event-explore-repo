import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate} from "react-router";
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from "react-toastify";


const Login = () => {
  const {loginUser, googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin =(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    loginUser(email,password)
    .then(result => {
      toast.success("Successfully Logged In...!");
      navigate(`${location.state ? location.state : "/"}`);
    }).catch(error => {
      toast.error("Login fail " + error.code);
    })
  };

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(res => {
      console.log(res.user);
      toast.success("Google LogIn Successfully...!")
      navigate(`${location.state ? location.state : "/"}`);
    })
    .catch(err => {
      console.log(err)
      toast.error("Google LogIn fail " + err.message);
    })
  };

  useEffect(() => {
    document.title = "Event Explore | Login";
  }, []);

  return (
    <div data-aos="zoom-in" className="flex justify-center items-center mt-20">
      <form onSubmit={handleLogin} className="fieldset  w-sm lg:w-md bg-gray-800 px-5 py-8 rounded-2xl">
        <h3 data-aos="zoom-in" className="text-primary font-bold text-2xl text-center mb-5">Please Login!</h3>
        <label className="label text-primary text-lg ">Email</label>
        <input 
        required
        name="email"
        type="email" 
        className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12" 
        placeholder="Enter Your Email" />
        <label className="label text-primary text-lg mt-2">Password</label>

        <input
          required
          name="password"
          type="password"
          className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12"
          placeholder="Enter Your Password"
        />
        <div>
          <a className="link link-hover underline text-secondary">Forgot password?</a>
        </div>

        <button data-aos="zoom-in" type="submit" className="bg-secondary text-primary text-lg font-semibold rounded-xl cursor-pointer mt-2 h-12">Login</button>

        <div className="divider divider-primary text-primary">OR</div>

        {/* Google */}
      <button onClick={handleGoogleLogin} data-aos="zoom-in" className="btn rounded-xl bg-white text-black border-[#e5e5e5]  h-12">
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
      <p className="text-lg text-accent mt-4 text-center">
        Don't Have An Account ? 
        <Link className="text-secondary underline font-semibold" to="/register">  Register</Link>
        </p>
      </form>

      
    </div>
  );
};

export default Login;
