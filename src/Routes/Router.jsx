import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Profile from "../Pages/Profile";
import Loader from "../Pages/Loader";
import EventDetails from "../Pages/EventDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
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
                Component: Profile
            },
            {
                path: "eventDetails/:id",
                Component: EventDetails,
                loader: () => fetch('/event.json'),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            }
        ]
    },
    {
        path: "/*",
        element: <h3>Error page 404</h3>
    }
])