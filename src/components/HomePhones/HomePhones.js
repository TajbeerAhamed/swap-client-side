import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePhones = ({phone}) => {
  const navigate = useNavigate()
  const handlePhones = (id) =>{
    navigate(`/category/${id}`);
  }
    const {picture,brand,category_id} = phone
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-red-600">{brand}</h2>
    
    <div className="card-actions">
      <button onClick={ () =>{handlePhones(category_id)}} className="btn btn-primary text-white hover:bg-red-700 bg-red-600">View Products</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomePhones;