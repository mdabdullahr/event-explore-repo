# Event Explorer – A Local Event Discovery Platform

## 🚀 Project Overview
Event Explorer is a platform designed to help users discover and explore local events such as conferences, workshops, sports events, art exhibitions, and more. Users can log in, browse upcoming events, view detailed event information, and leave feedback or ratings on events they attend.

This project is built using **React**, **Firebase**, and **TailwindCSS**, offering a seamless experience for users to interact with events and reserve seats.

## 🌐 Live URL
[Event Explorer - Live](https://event-explore-e54a1.web.app/)

## 📋 Features
- **User Authentication**: Sign up and log in using email/password or Google authentication.
- **Event Listings**: Browse a variety of upcoming local events, each with detailed information such as location, date, and entry fee.
- **Event Details Page**: View more information about an event when you click on the "View More" button.
- **Seat Reservation**: Reserve a seat by providing your name and email for an event.
- **Responsive UI**: Fully responsive layout for mobile, tablet, and desktop.
- **Protected Routes**: Event details and profile pages are protected and require login.
- **Forgot Password**: Forget Password functionality (opens Gmail).

## ⚡ Key Features
- **Dynamic Event Cards**: Cards displaying event data such as name, category, date, and entry fee.
- **Dynamic Page Titles**: Each page has a unique title displayed based on its content.
- **Scroll Animations**: Implemented using the `aos` package.
- **User Profile**: Users can view and edit their profile details like name and photo.

## 📦 Dependencies & Versions

### Dependencies
- `@tailwindcss/vite`: ^4.1.5  
- `aos`: ^2.3.4  
- `firebase`: ^11.6.1  
- `react`: ^19.0.0  
- `react-dom`: ^19.0.0  
- `react-icons`: ^5.5.0  
- `react-router`: ^7.5.3  
- `react-toastify`: ^11.0.5  
- `swiper`: ^11.2.6  
- `tailwindcss`: ^4.1.5  

### DevDependencies
- `@eslint/js`: ^9.22.0  
- `@types/react`: ^19.0.10  
- `@types/react-dom`: ^19.0.4  
- `@vitejs/plugin-react`: ^4.3.4  
- `daisyui`: ^5.0.35  
- `eslint`: ^9.22.0  
- `eslint-plugin-react-hooks`: ^5.2.0  
- `eslint-plugin-react-refresh`: ^0.4.19  
- `globals`: ^16.0.0  
- `vite`: ^6.3.1


## 🛠️ How to Run Locally
1. Clone the repository:  
bash
git clone https://github.com/mdabdullahr/event-explorer.git

2. Navigate to the project directory:
bash
cd event-explorer

3. Install dependencies:
bash
npm install

4. Create a .env file in the root directory and add your Firebase config:

env

VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id

5. Start the development server:
bash
npm run dev

6. Open your browser and visit http://localhost:5173

👨‍💻 Author
Abdullah
GitHub: @mdabdullahr
Email: mdabdullah162005@gmail.com

📜 License
This project is licensed under the MIT License.

Thank you for visiting! Feel free to reach out for any questions or suggestions.




