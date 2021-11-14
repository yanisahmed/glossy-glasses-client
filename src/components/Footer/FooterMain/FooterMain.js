import React from 'react';
import { useLocation } from 'react-router';

const FooterMain = () => {
    const location = useLocation();
    const url_slug = location.pathname;
    return (
        <>
            {!url_slug.includes('/dashboard') && <div className="container mx-auto">
                <div className="grid md:grid-cols-3">
                    <div>
                        <h2 className="uppercase text-4xl font-semibold text-gray-50">Glossy Glasses</h2>
                        <p className="my-4 text-gray-100">Modern eye glass caring service provider.Serving since 2020 and commited to deliver quality product on time. </p>

                        <p className="my-4 text-gray-100">mail@glossy-glasses.com</p>
                    </div>
                    <div className="col-span-2">
                        <div className="grid md:grid-cols-3">
                            <div>
                                <h3 className="list-title text-white font-medium">About Us</h3>
                                <ul className="mt-4">
                                    <li className="text-white">My Orders</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="list-title text-white font-medium">Services</h3>
                                <ul className="mt-4">
                                    <li className="text-white">My Orders</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="list-title text-white font-medium">My Account</h3>
                                <ul className="mt-4">
                                    <li className="text-white">My Orders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default FooterMain;