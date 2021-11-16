import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';


const OrderDetails = ({ product }) => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    let history = useHistory();

    const onSubmit = data => {
        // console.log(data);
        data.product_name = product.title;
        data.key = product._id;
        data.price = product.price;
        data.status = 'Pending';
        fetch('https://powerful-sands-79915.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your order is pending now');
                    history.push('/thank-you');
                }
            })
    }
    return (
        <div>
            <div className="grid md:grid-cols-2 md:gap-x-4 px-2 md:px-0">
                <div className="text-center">
                    <img src={product.image_url} className="w-48 mx-auto" alt="" />
                    <h3 className="text-yellow-300 mt-8">{product.title}</h3>
                    <h3 className="text-yellow-300">Quantity: 1</h3>
                    <h3 className="my-2">Total Price: ${product.price}</h3>

                </div>
                <div>
                    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full  mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="text"  {...register("username")} value={user.displayName} />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full  mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Email
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="username" type="text"  {...register("useremail")} value={user.email} />
                            </div>
                        </div>


                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
                                    Address
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder="Address" {...register("address")} />
                            </div>
                        </div>
                        <button
                            className="
                        bg-yellow-500
                        text-white
                        active:bg-purple-600
                        font-bold
                        uppercase
                        text-sm
                        px-6
                        py-3
                        rounded-full
                        shadow
                        hover:shadow-lg
                        outline-none
                        focus:outline-none
                        mr-1
                        mb-1
                        ease-linear
                        transition-all
                        duration-150
                    "
                            type="submit"
                        >
                            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Order Now
                        </button>


                    </form>

                </div>
            </div>

        </div>
    );
};

export default OrderDetails;