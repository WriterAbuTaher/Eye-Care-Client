import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header class="border-b mb-8">
            <div class="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto">
                <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                    <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/8752/8752205.png" alt="" />
                    Eye Care
                </a>
                <nav class="hidden lg:flex gap-12 2xl:ml-16">
                    <NavLink to={'/home'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Home</NavLink>
                    <NavLink to={'/services'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Services</NavLink>
                    <NavLink to={'/blog'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Blog</NavLink>
                    <NavLink to={'/help'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Help</NavLink>
                    <NavLink to={'/profile'} className="relative text-gray-600 text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">Profile</NavLink>
                </nav>
                <div class="flex sm:border-l border-r divide-x">

                    <a href="#" class="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>

                        <span class="hidden sm:block text-gray-500 text-xs font-semibold">Account</span>
                    </a>

                    <a href="#" class="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>

                        <span class="hidden sm:block text-gray-500 text-xs font-semibold">Cart</span>
                    </a>

                    <button type="button" class="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex lg:hidden flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>

                        <span class="hidden sm:block text-gray-500 text-xs font-semibold">Menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;