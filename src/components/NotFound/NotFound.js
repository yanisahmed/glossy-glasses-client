import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="page-not-found flex justify-evenly items-center h-96">
                    <div>
                        <h1 className="text-6xl font-bold">404</h1>
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold">Page not found</h1>
                        <Link to="/"><button className="px-4 py-2 bg-blue-400 mt-4 mr-2">Go Back Home</button></Link>
                        <Link to="/"><button className="px-4 py-2 bg-yellow-400 mt-4">Products</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;