import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceInfo = () => {

    const { name, img, price, whatIsIt, risk, treatment, symptoms } = useLoaderData();

    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-md px-4 md:px-8 mx-auto">

                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{name}</h1>
                    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                        {whatIsIt}
                    </p>

                    <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
                        <img src={img} loading="lazy" alt="Photo by Minh Pham" className="w-full object-cover object-center" />
                    </div>

                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">What are the symptoms of {name}?</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        {
                            symptoms.map(e => <li>{e}</li>)
                        }
                    </ul>

                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Am I at risk for {name}?</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        {
                            risk.map(e => <li>{e}</li>)
                        }
                    </ul>

                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">What’s the treatment for {name}?</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        {
                            treatment.map(e => <li>{e}</li>)
                        }
                    </ul>

                    <div className='flex justify-between items-center my-8'>
                        <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Price: ${price}</h2>
                        <Link to={'/reviewNow'}
                            className="group flex items-center justify-center rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                        >
                            <span
                                className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
                            >
                                Review Now
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


            </div>
        </>
    );
};

export default ServiceInfo;