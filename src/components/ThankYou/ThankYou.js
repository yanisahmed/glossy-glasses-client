import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="page-not-found flex justify-evenly items-center h-96">
                    <div>
                        <h1 className="text-6xl font-bold">Thank You</h1>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">You order is on the way</h1>
                        <p>Please wait 3-5 business day</p>
                        <Link to="/"><button className="px-4 py-2 bg-blue-400 mt-4 mr-2">Go Back Home</button></Link>
                        <Link to="/products"><button className="px-4 py-2 bg-yellow-400 mt-4">Purchase More</button></Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ThankYou;