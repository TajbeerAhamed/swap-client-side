import React from 'react';

const HomePhones = ({phone}) => {
    const {picture,brand} = phone
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-red-600">{brand}</h2>
    
    <div className="card-actions">
      <button className="btn btn-primary text-white hover:bg-red-700 bg-red-600">View Products</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomePhones;