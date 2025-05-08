import React, { useEffect } from 'react';

const TermsCondition = () => {
    useEffect(() => {
        document.title = "Event Explore | Terms & Conditions";
      }, []);
    
      return (
        <div data-aos="zoom-in" className="max-w-4xl mx-auto text-gray-300 p-6 space-y-4 mt-10 lg:mt-20 shadow-xl shadow-[#34116241] transition-transform duration-500 hover:scale-105">
          <h1 data-aos="zoom-in" className="text-3xl font-bold text-secondary mb-4 transition-transform duration-500 hover:scale-105">Terms and Conditions</h1>
          <p>
            Welcome to Event Explore. By accessing or using our website, you agree to be bound by these terms. Please read them carefully.
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>You must be at least 13 years old to use our platform.</li>
            <li>All content and materials on this platform are protected by copyright laws.</li>
            <li>You may not use the website for any illegal or unauthorized purpose.</li>
            <li>We reserve the right to terminate access to any user who violates these terms.</li>
            <li>All event details are for informational purposes only. We are not responsible for any inaccuracies or changes.</li>
          </ul>
          <p className="mt-4">
            If you have any questions about our terms, feel free to contact us.
          </p>
        </div>
      );
    };

export default TermsCondition;