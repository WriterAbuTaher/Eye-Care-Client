import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/UserContext';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const email = user?.email;
    const userName = user?.displayName;
    const img = user?.photoURL;

    useEffect(() => {
        fetch(`https://eye-care-server-jet.vercel.app/reviews?email=${email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [email])

    // handle the review delete
    const handleDelete = (id) => {
        fetch(`https://eye-care-server-jet.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Oops!',
                        'You Removed Your Review!',
                        'warning'
                    )
                    const remainng = reviews.filter(review => review._id !== id);
                    setReviews(remainng);
                }
            })
            .catch(err => console.error(err));
    }


    return (
        <div className='max-w-screen-lg mx-auto flex justify-center'>
            <section className='my-8 bg-gray-100'>
                <div className="container flex flex-col items-center mx-auto md:p-12">
                    {
                        reviews.length === 0 ?
                            <div className="container flex flex-col items-center mx-auto md:p-12">
                                <h1 className="p-4 text-4xl font-semibold leading-none text-center">There Are No Reviews For About Us</h1>
                            </div>
                            :
                            <div className="container flex flex-col items-center mx-auto md:p-12">
                                <h1 className="p-4 text-4xl font-semibold leading-none text-center">Here Are Your Reviews For About Us</h1>
                            </div>
                    }
                </div>
                <div className="grid md:grid-cols-2 px-4">
                    {
                        reviews.map(review => {
                            const { reviewText, serviceName, _id } = review;
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
                                        <div className='flex gap-4 justify-between mt-4'>
                                            <Link to={`/reviewUpdate/${_id}`}
                                                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                                            >
                                                Update
                                            </Link>
                                            <button onClick={() => handleDelete(_id)}
                                                className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                                            >
                                                <span
                                                    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
                                                ></span>

                                                <span
                                                    className="relative text-sm font-medium transition-colors group-hover:text-white"
                                                >
                                                    Remove
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default MyReviews;