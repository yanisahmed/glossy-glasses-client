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
            <div className="container mx-auto">
                <div>
                    <h3 className="text-center text-2xl font-semibold my-8">Our Products</h3>
                </div>
                <div className="grid md:grid-cols-4 gap-y-2">
                    {!isLoading && products.map((product, index) => index < 8 && <Product key={product._id} product={product} />)}
                    {isLoading && <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-24 w-3/12 rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>}
                </div>
            </div>
        </>
    );
};

export default Products;