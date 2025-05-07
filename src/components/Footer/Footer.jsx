import { Link, NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { VscSymbolEvent } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#34116241] to-gray-900 text-gray-300 px-4 md:px-10 lg:px-20 py-10 lg:py-20 mt-20">
      <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-20">
        {/* Logo and Description */}
        <div>
          <div
            data-aos="zoom-in"
            className="flex items-center transition-transform duration-500 hover:scale-105 mb-3"
          >
            <VscSymbolEvent size={25} color="#FFFFFF" />

            <a className="text-xs md:text-2xl font-bold text-base-100">
              Event{" "}
              <span className="text-secondary font-semibold">Explorer</span>
            </a>
          </div>
          <p className="text-sm lg:text-md">
            Discover local events, workshops, exhibitions & more. Join us to
            explore your city like never before!
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/terms-and-conditions"
                className="hover:text-secondary"
              >
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className="hover:text-secondary">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-secondary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="hover:text-secondary">
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow <span className="text-secondary">Us</span></h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4 lg:pt-10">
        &copy; {new Date().getFullYear()} Event Explore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
