import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import Hero from './Hero';

const Home = () => {
    const serviceData = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <ServiceCard serviceData={serviceData}></ServiceCard>
        </div>
    );
};

export default Home;