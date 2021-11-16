import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSlider.css'

const HomeSlider = () => {
    return (
        <div className="carousel relative rounded relative overflow-hidden shadow-xl">
            <div className="carousel-inner relative overflow-hidden w-full">
                {/* <!--Slide 1--> */}
                <input
                    className="carousel-open"
                    type="radio"
                    id="carousel-1"
                    name="carousel"
                    aria-hidden="true"
                    hidden=""
                    defaultChecked="checked"
                />
                <div
                    className="carousel-item absolute opacity-0 bg-center"
                    style={{
                        height: '500px',
                        backgroundImage: "url('https://i.ibb.co/9nsJ6ZK/glossy-glasses-banner-1.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'Top'
                    }}
                >
                    <div className="absolute left-24 bottom-24">
                        <h3 className="text-5xl mb-4 font-bold">Get 30% off</h3>
                        <Link to="/products"><button className="bg-blue-900 hover:bg-yellow-300 text-white px-4 py-2 rounded">Purchase Now</button></Link>
                    </div>
                </div>
                <label
                    htmlFor="carousel-3"
                    className="
        control-1
        w-10
        h-10
        ml-2
        md:ml-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        left-0
        my-auto
        flex
        justify-center
        content-center
      "
                >
                    <FontAwesomeIcon icon={faAngleLeft} className="mt-3" />
                </label>
                <label
                    htmlFor="carousel-2"
                    className="
        next
        control-1
        w-10
        h-10
        mr-2
        md:mr-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        right-0
        my-auto
      "
                >
                    <FontAwesomeIcon icon={faAngleRight} className="mt-3" />
                </label>

                {/* <!--Slide 2--> */}
                <input
                    className="carousel-open"
                    type="radio"
                    id="carousel-2"
                    name="carousel"
                    aria-hidden="true"
                    hidden=""
                />
                <div
                    className="carousel-item absolute opacity-0 bg-center"
                    style={{
                        height: '500px',
                        backgroundImage: "url('https://i.ibb.co/b15f0pc/glossy-glasses-banner-2.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'Top'
                    }}
                >
                    <div className="absolute right-24 bottom-24">
                        <h3 className="text-5xl mb-4 font-bold text-white">Get 30% off</h3>
                        <Link to="/products"><button className="bg-blue-900 hover:bg-yellow-300 text-white px-4 py-2 rounded">Purchase Now</button></Link>
                    </div>
                </div>
                <label
                    htmlFor="carousel-1"
                    className="
        control-2
        w-10
        h-10
        ml-2
        md:ml-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        left-0
        my-auto
      "
                >
                    <FontAwesomeIcon icon={faAngleLeft} className="mt-3" />
                </label>
                <label
                    htmlFor="carousel-3"
                    className="
        next
        control-2
        w-10
        h-10
        mr-2
        md:mr-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        right-0
        my-auto
      "
                >
                    <FontAwesomeIcon icon={faAngleRight} className="mt-3" />
                </label>

                {/* <!--Slide 3--> */}
                <input
                    className="carousel-open"
                    type="radio"
                    id="carousel-3"
                    name="carousel"
                    aria-hidden="true"
                    hidden=""
                />
                <div
                    className="carousel-item absolute opacity-0"

                    style={{
                        height: '500px',
                        backgroundImage: "url('https://i.ibb.co/6JLXhzR/glossy-glasses-banner-3.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'Top'
                    }}
                >
                    <div className="absolute right-24 bottom-24">
                        <h3 className="text-5xl mb-4 font-bold text-white">Get 30% off</h3>
                        <Link to="/products"><button className="bg-blue-900 hover:bg-yellow-300 text-white px-4 py-2 rounded">Purchase Now</button></Link>
                    </div>
                </div>
                <label
                    htmlFor="carousel-2"
                    className="
        control-3
        w-10
        h-10
        ml-2
        md:ml-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        left-0
        my-auto
      "
                >
                    <FontAwesomeIcon icon={faAngleLeft} className="mt-3" />

                </label>
                <label
                    htmlFor="carousel-1"
                    className="
        next
        control-3
        w-10
        h-10
        mr-2
        md:mr-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        right-0
        my-auto
      "
                >
                    <FontAwesomeIcon icon={faAngleRight} className="mt-3" />

                </label>

                {/* <!-- Add additional indicators for each slide--> */}
                <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                        <label
                            htmlFor="carousel-1"
                            className="
            carousel-bullet
            cursor-pointer
            block
            text-4xl text-white
            hover:text-blue-700
          "
                        >•</label
                        >
                    </li>
                    <li className="inline-block mr-3">
                        <label
                            htmlFor="carousel-2"
                            className="
            carousel-bullet
            cursor-pointer
            block
            text-4xl text-white
            hover:text-blue-700
          "
                        >•</label
                        >
                    </li>
                    <li className="inline-block mr-3">
                        <label
                            htmlFor="carousel-3"
                            className="
            carousel-bullet
            cursor-pointer
            block
            text-4xl text-white
            hover:text-blue-700
          "
                        >•</label
                        >
                    </li>
                </ol>

            </div>
        </div>
    );
};

export default HomeSlider;