import React from 'react';

const Review = (props) => {
    const { name,body,ratings } = props.review
    return (
        <div className='border-2 rounded-3xl '>
            <div className='mt-6 ml-10 flex items-center'>
                <img className='w-16 h-16 rounded-full ' src={`https://picsum.photos/200/300?${Math.random()}`} alt="" />
                <h4 className='font-medium p-4'>{name}</h4>
            </div>
            <div>
                <p className='border-2 rounded-3xl mt-4 p-4'>
                    {
                        body
                    }
                </p>
                <small className='font-bold'>Ratings : {ratings}</small>
            </div>
        </div>
    );
};

export default Review;