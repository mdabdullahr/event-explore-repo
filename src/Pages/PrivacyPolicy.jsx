import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        document.title = "Event Explore | Privacy Policy";
      }, []);
    
      return (
        <div className="max-w-4xl mx-auto text-gray-300 p-6 space-y-4 mt-10 lg:mt-20 shadow-xl shadow-[#34116241] rounded-2xl">
          <h1 className="text-3xl font-bold text-secondary mb-4">Privacy Policy</h1>
          <p>
            At Event Explore, we respect your privacy. This policy outlines what data we collect and how we use it.
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>We collect basic information such as name, email, and profile picture during registration.</li>
            <li>Your data is stored securely using Firebase Authentication.</li>
            <li>We do not sell or share your personal information with third parties.</li>
            <li>We use cookies to enhance your user experience and analytics.</li>
            <li>You have the right to request deletion of your account and data at any time.</li>
          </ul>
          <p className="mt-4">
            For any privacy-related concerns, please contact our support team.
          </p>
        </div>
      );
    };

export default PrivacyPolicy;