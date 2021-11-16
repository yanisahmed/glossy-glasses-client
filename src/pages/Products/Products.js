import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import Product from '../../components/Product/Product'

const Products = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://powerful-sands-79915.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(products);
            });
    }, []);

    return (
        <>
            <section className="section-title mt-8 mb-4">
                <h3 className="uppercase text-center font-semibold text-3xl">All Products</h3>
            </section>
            <div className="container mx-auto grid md:grid-cols-4 gap-x-4 gap-y-8 my-4">
                {/* {products.map(product => <Product key={product._id} product={product} />)} */}

                {!isLoading && products.map(product => <Product key={product._id} product={product} />)}
                {isLoading && <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-24 w-3/12 rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>}
            </div>

        </>
    );
};

export default Products;