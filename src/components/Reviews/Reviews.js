import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div>
            <h2 className='text-5xl mb-10 font-medium text-purple-900 border-2
             rounded-2xl px-4 py-5 bg-purple-200'>CUSTOMER REVIEWS : {reviews.length}</h2>
            <div className="review-container">
            {
                reviews.map(review=><Review 
                key={review.id}
                review={review}
                ></Review>)
            }
            </div>
        

        </div>
    );
};

export default Reviews;