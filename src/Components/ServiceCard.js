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
                        return (
                            <div key={data._id} className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                                <img src={data.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{data.name}</h2>
                                        <p className="dark:text-gray-100">{data.whatIsIt.slice(0, 100)}...</p>
                                    </div>
                                    <Link
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
        </>
    );
};

export default ServiceCard;