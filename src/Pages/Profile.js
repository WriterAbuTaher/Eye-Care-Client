import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className='flex justify-center my-16'>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-lg rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                {
                    user?.photoURL ?
                        <img src={user.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                        :
                        <img src="https://cdn-icons-png.flaticon.com/512/560/560277.png" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                }
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    {
                        user &&
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">{user.displayName}</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-400">{user.email}</p>
                        </div>
                    }
                </div>
                <div className='mx-auto my-2'>
                    {
                        user ?
                            <button onClick={handleLogOut}
                                className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                            >
                                Log Out
                            </button>
                            :
                            <Link to={'/login'}
                                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                            >
                                Log In
                            </Link>
                    }
                </div>
                <Link to={'/home'}
                    className="group flex items-center justify-between rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                >
                    <span
                        className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
                    >
                        Go To Home
                    </span>

                    <span
                        className="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
                    >
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Profile;