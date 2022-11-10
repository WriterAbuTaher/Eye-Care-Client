import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <header className="border-b mb-8">
            <div className="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto">
                <Link to={'/'} className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                    <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/8752/8752205.png" alt="" />
                    Eye Care
                </Link>
                <nav className="hidden lg:flex gap-12 2xl:ml-16">
                    <NavLink to={'/home'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Home</NavLink>
                    <NavLink to={'/services'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Services</NavLink>
                    <NavLink to={'/blog'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Blog</NavLink>
                    <NavLink to={'/help'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Help</NavLink>
                    {
                        !user &&
                        <>
                            <NavLink to={'/login'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Login</NavLink>
                            <NavLink to={'/register'}
                                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                            >
                                Register
                            </NavLink>
                        </>
                    }
                </nav>

                <div className="flex sm:border-l border-r divide-x">

                    <Link to={'/profile'} className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>

                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Account</span>
                    </Link>

                    <a href="#" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>

                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Cart</span>
                    </a>

                    <button type="button" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex lg:hidden flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>

                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;