import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const AllServices = () => {
    const allService = useLoaderData();
    return (
        <div>
            <h2 className=" flex justify-center items-center mt-24 text-2xl md:text-4xl  font-bold text-slate-200 dark:text-slate-800">
                <span>Our Services</span>
            </h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-11/12 mx-auto gap-8 mt-8">
                {allService.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default AllServices;