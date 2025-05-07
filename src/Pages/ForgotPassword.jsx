import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const location = useLocation();
  const passedEmail = location.state?.email || "";
  const [email, setEmail] = useState(passedEmail);

  const handleResetPassword = () => {
    if (!email) {
      toast.error("Please provide an email.!");
      return;
    }
    toast.success("You are being taken to Gmail...");
    window.location.href = "https://mail.google.com";
  };

  useEffect(() => {
    document.title = "Event Explore | Forgot Password";
  }, []);

  return (
    <div className="flex justify-center items-center mt-20">
      <form className="space-y-4 w-full max-w-md mx-auto bg-gray-800 p-6 rounded-2xl border border-gray-700">
        <h3 className="text-primary font-bold text-2xl text-center mb-5">
          Reset Your Password
        </h3>

        <label className="label text-primary text-lg">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input w-full bg-base-300 text-primary border-gray-700 rounded-xl h-12"
          placeholder="Enter Your Email"
        />

        <button
          type="button"
          onClick={handleResetPassword}
          className="bg-secondary cursor-pointer text-primary text-lg font-semibold rounded-xl h-12 w-full mt-4"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
