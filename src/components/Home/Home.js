import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeDetails from '../HomeDetails/HomeDetails';
import HomePhones from '../HomePhones/HomePhones';


const Home = () => {
    const phones = useLoaderData()
    return (
        <div>
             <HomeBanner></HomeBanner>
       <HomeDetails></HomeDetails>
<div className='grid sm:grid-cols-3 gap-3 ml-10 sm:mt-10 mt-10 mb-20'>
{
    phones.map(phone =><HomePhones
    key={phone._id}
    phone={phone}
    ></HomePhones>)
}
</div>
        </div>

    );
};

export default Home;