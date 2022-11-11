import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddServices = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch('https://eye-care-server-jet.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Thank You!',
                        'Your Service Placed Succesfully!',
                        'success'
                    )
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    const handleInputBlur = (e) => {
        const value = e.target.value;
        const field = e.target.name;

        const newServices = { ...services };
        newServices[field] = value;

        setServices(newServices);
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Please Add A Service</h2>

                <form onSubmit={handleAddService} className="max-w-lg border rounded-lg mx-auto">
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">Service Name</label>
                            <input onBlur={handleInputBlur} name="name" type="text" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div>
                            <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">Photo URL</label>
                            <input onBlur={handleInputBlur} name="img" type="text" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>

                        <div>
                            <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">Price</label>
                            <input onBlur={handleInputBlur} name="price" type="number" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" required />
                        </div>
                        <div className="flex flex-col w-full mb-4">
                            <label className="inline-block text-gray-800 text-sm sm:text-base mb-2" htmlFor="message">Service Details</label>
                            <textarea onBlur={handleInputBlur}
                                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                                placeholder="Service Details"
                                rows="8"
                                id="message"
                                name='whatIsIt'
                                type='text' required
                            ></textarea>
                        </div>

                        <button type='submit' className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;