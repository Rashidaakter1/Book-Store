import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Home = () => {
    const [reviews,setReviews]=useReview()
    const newReviews=reviews.slice(0,3)
    console.log(newReviews);
    return (
        <div>
            <div className='grid grid-cols-2 gap-30 mt-20'>

                <div className="home-detail mt-24">
                    <h1 className='text-4xl font-bold mb-4 text-gray-700'>
                        MEET YOUR NEXT FAVOURITE BOOK
                    </h1>
                    <h1 className='text-4xl font-bold text-cyan-700'>ENRICH YOUR KNOWLEDGE</h1>
                    <p className='mt-5 text-justify ml-6 font-medium'>Reading is important because it develops our thoughts, gives us endless knowledge and lessons while keeping our minds active. Books can hold and keep all kinds of information, stories, thoughts and feelings unlike anything else in this world. The importance of a book to help us learn and understand things cannot be underestimated.</p>

                    <button className='mt-8 border-2 py-3 px-10 rounded-lg bg-cyan-600 text-white font-semibold'>
                        Click Me
                    </button>

                </div>

                <img className='mt-10 w-4/5 ml-20 border-2 rounded-lg
                p-3' src={`https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?size=626&ext=jpg&ga=GA1.2.797603842.1642089981`} alt="" />

            </div>

            <div>
                <h1 className='text-4xl mt-48 mb-20 font-bold text-gray-800'>CUSTOMER REVIEWS : ({newReviews.length})</h1>
                <div className="review-container">
                {
                    newReviews.map(review=><Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
                </div>

                <button  className='mt-8 border-2 py-4 px-10 rounded-lg bg-cyan-600 text-white font-semibold'>
                   <Link to='/reviews' >See All Reviews</Link>
                   
                </button>
            </div>
        </div>
    );
};

export default Home;