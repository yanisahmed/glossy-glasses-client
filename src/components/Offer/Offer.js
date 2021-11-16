import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
        <>
            <div className="">
                <div className="bg-gray-600 py-8 text-center md:flex justify-evenly items-center">
                    <div>
                        <h3 className="text-5xl mb-4 font-bold text-white uppercase">Get 30% off</h3>
                    </div>
                    <div>
                        <Link to="/products"><button className="bg-blue-900 hover:bg-yellow-300 text-white px-4 py-2 rounded">Purchase Now</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offer;