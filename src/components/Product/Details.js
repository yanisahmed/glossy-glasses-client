import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ product }) => {
    console.log(product);
    return (
        <div>
            <div className="grid md:grid-cols-2 md:gap-x-4 px-2 md:px-0">
                <div>
                    <img src={product.image_url} alt="" />

                </div>
                <div>
                    <h3 className="text-yellow-300, text-3xl">{product.title}</h3>
                    <p className="mt-4">{product.description}</p>
                    <h3 className="text-3xl my-2 mt-8">Price: ${product.price}</h3>
                    <Link to={`/place-order/${product._id}`}><button className="uppercase px-4 py-2 bg-blue-500 text-white">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Details;