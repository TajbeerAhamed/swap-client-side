import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Question And Answer</h2>
		<div className="divide-y divide-gray-700">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What are the different ways to manage a state in a React application?</h3>
				<p className="md:pl-0 md:col-span-7">
There are four main types of state you need to properly manage in your React application: <br />
1. Local state - Local state is data we manage in one or another component.
<br />
2. Global state - Global state is data we manage across multiple components.
<br />
3. Server state - Data that comes from an external server that must be integrated with our UI state.
<br />
4. URL state - Data that exists on our URLs, including the pathname and query parameters.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">How does prototypical inheritance work?</h3>
				<p className="md:pl-0 md:col-span-7">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the prototype of an object, we use Object. getPrototypeOf and Object.
Example In the given example, there are two objects person and GFGuser. The object GFGuser inherits the methods and properties of the object person and further uses them.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is a unit test? Why should we write unit tests?</h3>
				<p className="md:pl-0 md:col-span-7">Unit Testing is a type of software testing where individual units or components of a software are tested.
<br />
We Should write unit tests because They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you are having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
			</div>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;