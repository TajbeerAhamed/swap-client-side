import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-white-600 text-red-600">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Question And Answer</h2>
		<div className="divide-y divide-red-700">
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
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">React vs. Angular vs. Vue?</h3>
				<p className="md:pl-0 md:col-span-7">React - React is the JavaScript library of User Interfaces. It is build single-page applications and also allows you to create reusable UI components. It is a front-end JavaScript framework, created by Facebook in 2011.
React has gained a lot of popularity in recent years and is considered one of the best frameworks for web development. There are more developers who keep React as a priority for creating wonderful websites.
<br />
<hr />

Angular - It's developed by Google, was released in the year 2010. It is a TypeScript-based framework that uses a regular DOM. Angular provides a set of tools using which a complex, reactive UI can be built.
Angular is used by Google, Up work, and MS Office and since this framework was implemented before React, it is more popular providing a highly functional framework to create larger applications.

<br />
<hr />

Vue - Vue was developed by a former Google employee and was released in the year 2014. It was developed to make the best version of Angular and make a custom tool.
Vue has become so popular these days and it is one of the hottest topics in terms of technology. Companies that use Vue as their front-end development framework are UpWork, Netflix, and Nintendo. It has a good rating on GitHub making it so popular.</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;