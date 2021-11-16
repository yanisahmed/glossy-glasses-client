import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderDetails from '../../components/OrderDetails.js/OrderDetails';

const PlaceOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://powerful-sands-79915.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [id])
    return (
        <>
            <section className="section-title mt-8 mb-4">
                <h3 className="uppercase text-center font-semibold text-3xl">Order Summary</h3>
            </section>
            <section className="my-8">
                <div className="container mx-auto ">
                    <OrderDetails product={product} />
                </div>
            </section>
        </>
    );
};

export default PlaceOrder;