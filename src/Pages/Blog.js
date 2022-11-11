import React from 'react';

const Blog = () => {
    return (
        <div className='bg-white py-6 sm:py-8 lg:py-12'>
            <div className='max-w-screen-lg px-4 md:px-8 mx-auto'>
                <div className='mb-16'>
                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">Difference between SQL and NoSQL Database?</h1>

                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">SQL Database</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</li>
                        <li>These databases have fixed or static or predefined schema</li>
                        <li>These databases are not suited for hierarchical data storage.</li>
                        <li>Vertically Scalable</li>
                        <li>Follows ACID property</li>
                    </ul>

                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">SQL Database</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        <li>Non-relational or distributed database system.</li>
                        <li>They have dynamic schema</li>
                        <li>These databases are best suited for hierarchical data storage.</li>
                        <li>These databases are not so good for complex queries</li>
                        <li>Horizontally scalable</li>
                        <li>Follows CAP(consistency, availability, partition tolerance)</li>
                    </ul>
                </div>

                <div className='mb-16'>
                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">What is JWT and how does it works?</h1>
                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">What Is JWT?</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        <li>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</li>
                    </ul>
                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">How JWT Works</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        <li>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: x.y.z</li>
                    </ul>
                </div>

                <div className='mb-16'>
                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">What is the difference between javascript and NodeJS?</h1>
                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">JavaScript</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        <li>Javascript is a programming language that is used for writing scripts on the </li>website.
                        <li>Javascript can only be run in the browsers.</li>
                        <li>It is basically used on the client-side.</li>
                        <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                        <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>
                        <li>Javascript is used in frontend development.</li>
                        <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</li>
                        <li>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++</li>.
                    </ul>
                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Node JS</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs does not have capability to add HTML tags.</li>
                        <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</li>
                        <li>Nodejs is used in server-side development.</li>
                        <li>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</li>
                        <li>Nodejs is written in C, C++ and Javascript.</li>
                    </ul>
                </div>

                <div className='mb-16'>
                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">How does NodeJS handle multiple requests at the same time?</h1>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        <li>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.</li>
                    </ul>
                    <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">How NodeJS handle multiple client requests?</h2>
                    <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                        <li>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.</li>
                        <li>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</li>
                        <li>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Blog;