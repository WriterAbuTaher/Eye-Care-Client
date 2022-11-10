import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ serviceData }) => {
    return (
        <>
            <h1 className='text-4xl text-center font-bold my-4'>Our <span className='text-indigo-600'>Services</span></h1>
            <div className='container mx-auto px-4 grid md:grid-cols-3 sm:grid-cols-2 gap-8'>
                {
                    serviceData.map(data => {
                        const { _id, img, name, whatIsIt } = data
                        return (
                            <div key={_id} className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                                        <p className="dark:text-gray-100">{whatIsIt.slice(0, 100)}...</p>
                                    </div>
                                    <Link to={`/services/${_id}`}
                                        className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 text-center"
                                    >
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center my-8'>
                <Link to={'/services'}
                    className="group flex items-center justify-center rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                >
                    <span
                        className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
                    >
                        Show All Services
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
        </>
    );
};

export default ServiceCard;