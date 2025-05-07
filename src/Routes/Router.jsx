import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Profile from "../Pages/Profile";
import Loader from "../Pages/Loader";
import EventDetails from "../Pages/EventDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import FAQ from "../Pages/FAQ";
import ForgotPassword from "../Pages/ForgotPassword";
import TermsCondition from "../Pages/TermsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
                loader: ()=> fetch('/event.json'),
                hydrateFallbackElement:<Loader></Loader>
            },
            {
                path: "blogs",
                Component: Blogs
            },
            {
                path: "profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: "/eventDetails/:id",
                element: <PrivateRoute>
                            <EventDetails></EventDetails>
                         </PrivateRoute>,
                loader: () => fetch('/event.json'),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "forgot-password",
                Component: ForgotPassword
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "faq",
                element: <PrivateRoute>
                    <FAQ></FAQ>
                </PrivateRoute>
            },
            {
                path: "terms-and-conditions",
                Component: TermsCondition
            }, 
            {
                path: "privacy-policy",
                Component: PrivacyPolicy
            }

        ]
    }
])