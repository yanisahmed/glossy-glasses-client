import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Order = ({ order }) => {
    const { admin } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://powerful-sands-79915.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);
    const handleDelete = id => {
        const process = window.confirm('Are you sure');
        if (process) {
            const url = `https://powerful-sands-79915.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        window.alert("Item has been deleted");
                        const remOrder = orders.filter(user => user._id !== id);
                        setOrders(remOrder);

                    }
                })
        }
    }
    const handleUpdate = id => {
        const process = window.confirm('Are you sure to confirm the order');

        if (process) {
            const url = `https://powerful-sands-79915.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {

                })
        }
    }
    return (
        <>
            <tr>
                <td>{order.product_name}</td>
                <td>{order.price}</td>
                <td className={order.status === 'Approved' ? 'md:table-cell text-green-500 text-semibold' : 'hidden md:table-cell text-yellow-500'}>{order.status}</td>
                <td className="hidden md:table-cell">{order.useremail}</td>
                <td className="hidden md:table-cell">{order.username}</td>
                <td>
                    {admin && <button className="bg-green-300 px-4 py-2 text-white mr-2"><FontAwesomeIcon icon={faEdit} onClick={() => handleUpdate(order._id)} /></button>}
                    <button className="bg-red-900 px-4 py-2 text-white"><FontAwesomeIcon icon={faWindowClose} onClick={() => handleDelete(order._id)} /></button>
                </td>
            </tr>

        </>
    );
};

export default Order;