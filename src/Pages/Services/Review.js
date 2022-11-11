import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/UserContext';

const Review = ({ _id, name }) => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const email = user?.email;
    const userName = user?.displayName;
    const img = user?.photoURL;

    useEffect(() => {
        fetch("https://eye-care-server-jet.vercel.app/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const handleReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewText = form.message.value;

        const userReview = {
            serviceId: _id,
            serviceName: name,
            reviewText,
            email,
            userName,
            img
        }

        fetch('https://eye-care-server-jet.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Thank You!',
                        'Your Review Placed Succesfully!',
                        'success'
                    )
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='max-w-screen-lg mx-auto'>
            <section className='my-8 bg-gray-100'>
                <div className="container flex flex-col items-center mx-auto md:p-12">
                    {
                        reviews.length === 0 ?
                            <h1 className="p-4 text-4xl font-semibold leading-none text-center">There Are No Reviews For About Us</h1>
                            :
                            <h1 className="p-4 text-4xl font-semibold leading-none text-center">Here Are Some Reviews For About Us</h1>
                    }
                </div>
                <div className="grid md:grid-cols-2 px-4">
                    {
                        reviews.map(review => {
                            const { reviewText, serviceName, _id, userName, img, email } = review;
                            return (
                                <div key={_id} className="flex flex-col max-w-sm h-max mx-8 my-6 shadow-lg">
                                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-200">
                                        <p className="text-xl font-semibold leading-tight text-center mb-4">{serviceName}</p>
                                        <p className="relative px-6 py-1 text-lg italic text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-indigo-400">
                                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                            </svg>{reviewText}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-indigo-400">
                                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-indigo-400 text-gray-900">
                                        {
                                            img ?
                                                <img src={img} alt="" className="w-20 h-20 mb-2 -mt-16 bg-center bg-cover rounded-full" />
                                                :
                                                <img src="https://cdn-icons-png.flaticon.com/512/560/560277.png" alt="" className="w-20 h-20 mb-2 -mt-16 bg-center bg-cover rounded-full" />

                                        }
                                        <p className="text-xl font-semibold leading-tight">{userName}</p>
                                        <p>{email}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            {/* review form */}
            <div className="flex flex-col w-full p-8 shadow-sm rounded-xl lg:p-12 bg-gray-100 ">
                <div className="flex flex-col items-center w-full">
                    {
                        user ?
                            <>
                                <h2 className="text-3xl font-semibold text-center">Please Give Your Review!</h2>
                                <div className="flex flex-col items-center py-6 space-y-3">
                                    <span className="text-center">How was your experience?</span>
                                    <div className="flex space-x-3">
                                        <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-yellow-500">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <form onSubmit={handleReview} className='w-full'>
                                    <div className="flex flex-col w-full">
                                        <div>
                                            <label className="sr-only" htmlFor="message">Message</label>
                                            <textarea
                                                className="w-full rounded-lg border-indigo-600 p-3 text-lg"
                                                placeholder="Message"
                                                rows="8"
                                                id="message"
                                                name='message'
                                                type='text' required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button type='submit'
                                            className="group relative inline-block focus:outline-none focus:ring my-4 text-center"
                                        >
                                            <span
                                                className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                                            ></span>

                                            <span
                                                className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                                            >
                                                Please Review
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </>
                            :
                            <>
                                <h2 className="text-3xl font-semibold text-center">Please Log In First To Give Review!</h2>
                                <Link to={'/login'}
                                    className="inline-block rounded bg-indigo-600 px-8 py-3 font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 mt-8"
                                >
                                    Log In
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;