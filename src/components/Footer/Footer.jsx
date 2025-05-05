import React from "react";
import { FaFacebook, FaInstagram, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#380b6e96] to-gray-900 text-white py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl text-primary font-bold">Event Explorer</h2>
          <p className="mt-2 text-sm text-accent">
            Discover and explore local events near you.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl text-primary font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="text-base-300 hover:text-blue-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-base-300 hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl text-primary font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook size={25} />
            </a>
            <a href="https://twitter.com" target="_blank">
            <FaTwitter size={25}/>
            </a>
            <a href="https://instagram.com" target="_blank">
            <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-6 text-sm text-accent">
        © 2025 Event Explorer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
