import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News";
import Profile from "../../Pages/Others/Profile";
import Terms from "../../Pages/Others/Terms";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://pract-news-server.vercel.app/category/08')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <PrivateRoute><Terms></Terms></PrivateRoute>
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`https://pract-news-server.vercel.app/news/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://pract-news-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])