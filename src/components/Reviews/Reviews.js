
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReviews]=useReview()


    return (
        <div>
            <h2 className='text-5xl mb-10 font-medium text-blue-900 border-2
             rounded-2xl px-4 py-5 bg-blue-200'>WHAT OUR CUSTOMERS SAY!!!</h2>
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