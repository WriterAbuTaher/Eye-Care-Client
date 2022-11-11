import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog';
import Error from '../Pages/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import MyReviews from '../Pages/Reviews/MyReviews';
import Profile from '../Pages/Profile';
import Register from '../Pages/Register';
import Review from '../Pages/Services/Review';
import ServiceInfo from '../Pages/Services/ServiceInfo';
import Services from '../Pages/Services/Services';
import ReviewUpdate from '../Pages/Reviews/ReviewUpdate';
import AddServices from '../Pages/Services/AddServices';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://eye-care-server-jet.vercel.app/limit")
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch("https://eye-care-server-jet.vercel.app/limit")
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch("https://eye-care-server-jet.vercel.app/services")
            },
            {
                path: '/addServices',
                element: <AddServices></AddServices>,
            },
            {
                path: '/services/:id',
                element: <ServiceInfo></ServiceInfo>,
                loader: ({ params }) => fetch(`https://eye-care-server-jet.vercel.app/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Review></Review>
            },
            {
                path: '/reviewUpdate/:id',
                element: <ReviewUpdate></ReviewUpdate>,
                loader: ({ params }) => fetch(`https://eye-care-server-jet.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
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