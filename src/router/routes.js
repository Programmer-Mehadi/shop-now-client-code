import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/profile',
                    element: <Profile></Profile>
                }
                ,
                {
                    path: '/product/:id',
                    element:<Product></Product>
                }
            ]
        }
    ]
)

export default router;