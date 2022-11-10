import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {

    const serviceData = useLoaderData();

    return (
        <>
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
                                    <Link to={`/service/${_id}`}
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

export default Services;