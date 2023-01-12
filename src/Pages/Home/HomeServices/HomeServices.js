import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../AllServices/Service';

const HomeServices = () => {
    let [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://jerry-kitchen-service-server-site.vercel.app/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    services = services.slice(0, 3);
    return (
        <div>
            <h2 className=" flex justify-center items-center mt-24 text-2xl md:text-4xl  font-bold text-slate-200 dark:text-slate-800">
                <span>Our Recomeneded Dishes</span>
            </h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-11/12 mx-auto gap-8 mt-8">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
            <Link className='flex justify-center' to={`/allservices`}>
                <button className="m-3 flex btn btn-outline btn-warning  rounded-none">
                    View All
                </button>
            </Link>

        </div>
    );
};

export default HomeServices;