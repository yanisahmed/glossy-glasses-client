import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';

import ReviewSingle from '../../components/ReviewSingle/ReviewSingle'
import useAuth from '../../hooks/useAuth';


const Reviews = () => {


    const { isLoading } = useAuth();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://powerful-sands-79915.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                console.log(reviews);
            });
    }, [reviews]);
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <h3 className="text-center text-2xl font-semibold my-8">Customer Reviews</h3>
                </div>
                <div className="mb-4">
                    <div className="grid  grid-cols-1 md:grid-cols-6 gap-y-8">
                        {!isLoading && reviews.map((review) => <ReviewSingle key={review._id} review={review} />)}
                        {isLoading && <span className="flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-24 w-3/12 rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                        </span>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;