import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ManageProduct = ({ product }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-sands-79915.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);
    const handleDelete = id => {
        const process = window.confirm('Are you sure');
        if (process) {
            const url = `https://powerful-sands-79915.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        window.alert("Item has been deleted");
                        const remOrder = products.filter(user => user._id !== id);
                        setProducts(remOrder);

                    }
                })
        }
    }

    return (
        <>
            <tr>
                <td>{product.title}</td>
                <td>{product.price}</td>

                <td>
                    <button className="bg-red-900 px-4 py-2 text-white"><FontAwesomeIcon icon={faWindowClose} onClick={() => handleDelete(product._id)} /></button>
                </td>
            </tr>

        </>
    );
};

export default ManageProduct;