import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left ml-20 mt-20 border-2 mr-20 p-8 rounded-lg'>
            <h4 className='font-bold'>What is Context API?</h4>
            <p>The Context API is a React structure that helps you to exchange unique details and assists in solving prop-drilling from all levels of your application.It is a way for a React app to effectively produce global variables that can be passed around.
            <br />
            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that provides the state to its children. It will hold the "data" and be the parent of all the components that might need that data. Consumer is a component that consumes and uses the state.
            </p>

            <br />

            <h4 className='font-bold'>What is Symantic tag?</h4>
            <p>
            The core characteristic of a semantic tags is that it clearly communicated its meaning to both the developer and the browser. These tags clearly define its content.The advantages of semantic tags are :
            <br />
            1. The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.
            <br />
            There are some examples:
            header: It defines a header for a web page.
            <br />
            nav: It defines a container for navigation links.
            </p>
        </div>
    );
};

export default Blogs;