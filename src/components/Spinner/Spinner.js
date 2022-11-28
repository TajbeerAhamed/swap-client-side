import React from 'react';

const Spinner = () => {
    return (
        <div className='
        mx-auto w-16 h-16 mt-72'>
  <div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
</div>
        </div>
    );
};

export default Spinner;