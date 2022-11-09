import React from 'react';

const Hero = () => {
    return (
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">


            <section className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="flex flex-wrap justify-between mb-8 md:mb-16">
                    <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                        <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-8">Take Care <br /> Of Your <span className='text-indigo-500'>Eye</span> <br /> Health Here</h1>

                        <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed">Your eyes do wondrous things. Through a complex system, they take in information and have a direct connection with your brain, allowing you to visually process the world around you.</p>
                    </div>

                    <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
                        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                            <img src="https://img.freepik.com/free-vector/ophthalmologist-concept-illustration_114360-6411.jpg?w=740&t=st=1667998619~exp=1667999219~hmac=70cc1f0f768ad3551e96a9fb5d66996e55fbc14dd9e10a5864d4acb8290821ac" loading="lazy" alt="Photo by Kaung Htet" className="w-full h-full object-cover object-center" />
                        </div>

                        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                            <img src="https://img.freepik.com/free-vector/ophthalmologist-concept-illustration_114360-6431.jpg?w=740&t=st=1667998879~exp=1667999479~hmac=17307be9260dd09c04a5e88b2d9b53420c1bd3f2178eb60825cc82f3df34a08a" loading="lazy" alt="Photo by Manny Moreno" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <a
                        className="group flex items-center justify-between rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
                        href="/download"
                    >
                        <span className="font-medium transition-colors group-hover:text-white">
                            Find out more
                        </span>

                        <span
                            className="ml-4 flex-shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
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
                    </a>

                    <div
                        className="group relative inline-block rounded-full border border-current px-8 py-3 text-indigo-600"
                    >
                        <span className="text-sm font-medium transition-opacity group-hover:opacity-0">
                            Follow On Social
                        </span>

                        <ul
                            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100"
                        >
                            <li>
                                <a
                                    className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
                                    href="/twitter"
                                >
                                    <span className="sr-only"> Twitter </span>

                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
                                    href="/github"
                                >
                                    <span className="sr-only"> GitHub </span>

                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
                                    href="/dribbble"
                                >
                                    <span className="sr-only"> Dribbble </span>

                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;