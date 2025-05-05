import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Profile from "../Pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "blogs",
                Component: Blogs
            },
            {
                path: "profile",
                Component: Profile
            }
        ]
    },
    {
        path: "/auth",
        element: <h3>All Blogs</h3>
    }, 
    {
        path: "/about",
        element: <h3>This is About page</h3>
    },
    {
        path: "/*",
        element: <h3>Error page 404</h3>
    }
])