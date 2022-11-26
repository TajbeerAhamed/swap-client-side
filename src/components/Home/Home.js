import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import CustomerReview from '../CustomerReview/CustomerReview';
import Discount from '../Discount/Discount';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeDetails from '../HomeDetails/HomeDetails';
import HomeImages from '../HomeImages/HomeImages';
import HomePhones from '../HomePhones/HomePhones';


const Home = () => {
    const navigate = useNavigate();
    const handleAllCategory = () => {
        navigate("/allcategories");
    };
    const phones = useLoaderData()
    return (
        <div>
             <HomeDetails></HomeDetails>
             <HomeBanner></HomeBanner>
            
      
       <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-red-600 sm:text-4xl sm:leading-none text-center">Categories of Phone</h1>
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
<HomeImages></HomeImages>
<CustomerReview></CustomerReview>
<Discount></Discount>
        </div>

    );
};

export default Home;