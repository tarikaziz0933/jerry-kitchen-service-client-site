import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, details, image_url } = service;
    console.log(image_url);
    return (
        <div
            className=" bg-slate-700 dark:bg-slate-200 shadow-xl hover:shadow-2xl  flex flex-col justify-between"
        >
            <div>
                <div className="h-64 cursor-zoom-in hover:mask-heart mask">
                    <img src={image_url} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="mx-3">
                    <h2 className="text-2xl font-bold text-slate-200 dark:text-slate-800 my-3">
                        {title}
                    </h2>
                    <p className="text-slate-300 dark:text-slate-700">
                        {details.slice(0, 100)}
                    </p>
                </div>
            </div>
            <Link to={`/services/${_id}`}>
                <button className="m-3 flex btn btn-outline btn-warning  rounded-none">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default Service;