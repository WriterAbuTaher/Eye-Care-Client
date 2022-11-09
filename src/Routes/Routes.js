import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog';
import Error from '../Pages/Error';
import Help from '../Pages/Help';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import Register from '../Pages/Register';
import Services from '../Pages/Services/Services';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://eye-care-server-jet.vercel.app/services")
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch("https://eye-care-server-jet.vercel.app/services")
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch("https://eye-care-server-jet.vercel.app/services")
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                path: '/help',
                element: <Help></Help>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])
export default Routes;