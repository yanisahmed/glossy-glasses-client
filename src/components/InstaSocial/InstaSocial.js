import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const InstaSocial = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <h3 className="text-center text-2xl font-semibold my-8">Our Instagram</h3>
                </div>
                <div className="mb-4">
                    <Carousel responsive={responsive}>
                        <div className=" bg-gray-900 max-w-sm w-11/12 lg:w-8/12 lg:flex">

                            <div className="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

                                <div className="flex items-center">

                                    <div className="">
                                        <img src={`https://i.ibb.co/xzcmyy4/black-round-half-rim.jpg`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-gray-900 max-w-sm w-11/12 lg:w-8/12 lg:flex">

                            <div className="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

                                <div className="flex items-center">

                                    <div className="">
                                        <img src={`https://i.ibb.co/s1RhhNK/black-wayfarer-ful-rim-unisex.jpg`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-gray-900 max-w-sm w-11/12 lg:w-8/12 lg:flex">

                            <div className="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

                                <div className="flex items-center">

                                    <div className="">
                                        <img src={`https://i.ibb.co/Wkj4sC8/blue-round-full-rim-eyeglasses.jpg`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-gray-900 max-w-sm w-11/12 lg:w-8/12 lg:flex">

                            <div className="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

                                <div className="flex items-center">

                                    <div className="">
                                        <img src={`https://i.ibb.co/QF8BPKR/brown-geometric-full-rim.jpg`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-gray-900 max-w-sm w-11/12 lg:w-8/12 lg:flex">

                            <div className="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

                                <div className="flex items-center">

                                    <div className="">
                                        <img src={`https://i.ibb.co/pX0CRNT/brown-round-full-rim-unisex.jpg`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default InstaSocial;