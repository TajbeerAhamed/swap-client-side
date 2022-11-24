import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPhonesDetails from '../AllPhonesDetails/AllPhonesDetails';

const AllPhones = () => {
    const allPhones = useLoaderData()
    return (
        <div className='grid sm:grid-cols-3 gap-3 ml-10 sm:mt-10 mt-10 mb-20'>
           {
            allPhones.map(allPhone => <AllPhonesDetails
            key={allPhone._id}
            allPhone={allPhone}
            ></AllPhonesDetails>)
           }
        </div>
    );
};

export default AllPhones;