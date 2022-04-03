import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-30 mt-20'>

                <div className="home-detail">
                    <h1 className='text-5xl'>
                        BUY YOUR BOOKS NOW
                    </h1>
                    <h1 className='text-5xl '>ENRICH YOUR KNOWLEDGE</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, distinctio aspernatur assumenda animi pariatur velit doloremque reprehenderit reiciendis at iusto quia? Qui labore, nobis quia voluptates optio voluptatibus odit aliquam!</p>

                    <button className='mt-8 border-2 py-2 px-3 rounded-lg bg-green-800 text-white font-semibold'>
                        Click Me
                    </button>

                </div>

                <img className='mt-20 ml-56' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAhr-tq_c2qNk-k8YtNvE8Gsvi3N-IP4GdQ&usqp=CAU`} alt="" />

            </div>

            <div>
                <h1 className='text-4xl font-medium mt-40'>CUSTOMER REVIEWS : </h1>
            </div>
        </div>
    );
};

export default Home;