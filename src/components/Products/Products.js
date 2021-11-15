import React from 'react';
import Product from '../Product/Product';

const Products = () => {
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <h3 className="text-center text-2xl font-semibold my-8">Our Products</h3>
                </div>
                <Product />
            </div>
        </>
    );
};

export default Products;