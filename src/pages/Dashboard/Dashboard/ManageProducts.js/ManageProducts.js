import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://powerful-sands-79915.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(true);
            });
    }, [products]);

    return (
        <>
            <SectionTitle title="Manage Products" />
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
                                <th className="w-3/12">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => <ManageProduct key={product._id} product={product} />)}

                        </tbody>
                    </table>

                </div>
            </section>}
        </>
    );
};

export default ManageProducts;