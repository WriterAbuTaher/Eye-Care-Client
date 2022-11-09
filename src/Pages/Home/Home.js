import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/ServiceCard';
import Hero from './Hero';

const Home = () => {
    const serviceData = useLoaderData();
    console.log(serviceData);
    return (
        <div>
            <Hero></Hero>
            <ServiceCard serviceData={serviceData}></ServiceCard>
        </div>
    );
};

export default Home;