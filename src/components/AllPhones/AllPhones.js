import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPhonesDetails from '../AllPhonesDetails/AllPhonesDetails';

const AllPhones = () => {
    const [allPhones, setAllPhones ] = useState([]);
    

    useEffect(() =>{
       fetch('http://localhost:5000/allPhones')
       .then(res => res.json())
       .then(data => setAllPhones(data))
    },[])
    
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