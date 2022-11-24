import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeDetails from '../HomeDetails/HomeDetails';
import HomePhones from '../HomePhones/HomePhones';


const Home = () => {
    const navigate = useNavigate();
    const handleAllCategory = () => {
        navigate("/allcategories");
    };
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
<Link to='/allPhones'>
                    <button
                        className="py-4 px-6  m-8 font-poppins text-xl text-black  font-medium rounded-lg bg-gradient-to-rounded-md bg-red-600
                       hover:bg-red-400	 hover:text-white"
                        onClick={handleAllCategory}
                    >
                        See All Products
                    </button>
                </Link>
</div>
        </div>

    );
};

export default Home;