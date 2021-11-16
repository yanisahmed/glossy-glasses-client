import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    console.log(product);

    return (
        <div className="single-product w-72 mx-auto border-2 relative">
            <img src={product.image_url} alt="" className="mb-2 w-72 h-64" />
            <h4 className="absolute top-0 bg-blue-900 text-white font-bold p-2">30%</h4>
            <div className="bg-gray-200 p-4 h-44">
                <p className="text-1xl clear-both mb-4 text-gray-900">{product.description.substr(0, 50)}</p>
                <h3 className="text-yellow-700 mb-2">{product.title}</h3>
                <div className="flex justify-between items-center">
                    <h4 className="mb-2">$<span>{product.price}</span></h4>
                    <span>
                        <Link to={`/products/${product._id}`}><button className="mr-2 py-2 px-4 bg-gray-700 text-white"><FontAwesomeIcon icon={faShoppingCart} className="mr-2 text-yellow-500" />Buy</button></Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Product;