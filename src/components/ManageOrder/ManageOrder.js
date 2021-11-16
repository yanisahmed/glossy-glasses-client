
import React, { useState, useEffect } from 'react';
import Order from '../Order/Order';
import SectionTitle from '../SectionTitle/SectionTitle';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://powerful-sands-79915.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(true);
            });
    }, [orders]);
    return (
        <>
            <SectionTitle title="Manage Orders" />
            {!loading ? <button type="button" className="bg-rose-600 ..." disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing
            </button> : <section className="my-8">
                <div className="container mx-auto flex justify-center">
                    <table class="table-fixed w-full text-center">
                        <thead>
                            <tr>
                                <th className="w-3/12">Product Name</th>
                                <th className="w-1/12">Price</th>
                                <th className="w-1/12 hidden md:table-cell">Status</th>
                                <th className="w-2/12 hidden md:table-cell">User</th>
                                <th className="w-2/12 hidden md:table-cell">Name</th>
                                <th className="w-3/12">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => <Order key={order._id} order={order} />)}

                        </tbody>
                    </table>

                </div>
            </section>}
        </>
    );
};

export default ManageOrder;