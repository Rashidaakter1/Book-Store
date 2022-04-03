import React from 'react';
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
                    <h1 className='text-5xl mb-4'>
                        BUY YOUR BOOKS NOW
                    </h1>
                    <h1 className='text-5xl '>ENRICH YOUR KNOWLEDGE</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, distinctio aspernatur assumenda animi pariatur velit doloremque reprehenderit reiciendis at iusto quia? Qui labore, nobis quia voluptates optio voluptatibus odit aliquam!</p>

                    <button className='mt-8 border-2 py-2 px-3 rounded-lg bg-green-800 text-white font-semibold'>
                        Click Me
                    </button>

                </div>

                <img className='mt-10 w-4/5 ml-20 border-2 rounded-lg
                p-3' src={`https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?size=626&ext=jpg&ga=GA1.2.797603842.1642089981`} alt="" />

            </div>

            <div>
                <h1 className='text-4xl font-medium mt-48 mb-20'>CUSTOMER REVIEWS :{newReviews.length} </h1>
                <div className="review-container">
                {
                    newReviews.map(review=><Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
                </div>

                <button  className='mt-8 border-2 py-2 px-3 rounded-lg bg-green-800 text-white font-semibold'>
                    See All
                </button>
            </div>
        </div>
    );
};

export default Home;