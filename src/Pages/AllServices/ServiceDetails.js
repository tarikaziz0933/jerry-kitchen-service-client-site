import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const ServiceDetails = () => {
    const { loading } = useContext(AuthContext);

    const service = useLoaderData();
    const { title, price, details, image_url, rating, total_view } = service;


    if (loading) {
        return (
            <div className="text-center mt-12">
                {/* <Spinner aria-label="Extra large  Center-aligned spinner example" /> */}
            </div>
        );
    }

    return (
        <div>
            <div className="hero min-h-screen bg-slate-700 text-slate-200">
                <div className="hero-content flex-col md:flex-row">
                    <div className="w-full md:w-1/2 md:mr-5">
                        <img
                            src={image_url}
                            alt=""
                            className="w-full object-cover cursor-zoom-in rounded-lg"
                        />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>

                        <div className="flex justify-between">
                            <div>
                                <small>Ratins: {rating}</small>
                            </div>
                            <div>
                                <p className="pr-10">Total View: {total_view}</p>
                            </div>
                        </div>


                        <p className="py-6 md:w-2/3 ">{details}</p>
                        <h1 className="text-4xl font-semibold text-red-600">${price}</h1>
                        <button className="btn btn-outline btn-success"><Link to='/paybill'>Purchase</Link></button>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ServiceDetails;