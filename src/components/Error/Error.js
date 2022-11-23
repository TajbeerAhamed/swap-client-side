import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full sm:p-16 bg-white-900 text-red-600">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<img src="https://media.istockphoto.com/id/1225748501/photo/displeased-spread-hands-404-page-not-found-on-laptop-screen.jpg?b=1&s=170667a&w=0&k=20&c=xbkRo31G9d09mzQxTZdZg2C3I73sBuw5xfvlL07bdGM=" alt="" />
        
		<p className="text-3xl">Looks like our services are currently offline</p>
		<Link to={'/'} rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-red-600 text-white">Back to homepage</Link>
	</div>
</section>
            
        </div>
    );
};

export default Error;