import React from 'react';
import OrderModal from '../OrderModal/OrderModal';

const SinglePhoneInfo = ({single}) => {
    const {brand,picture,_id,model,location,resale_price,original_price,years_of_use,posted_time,sellers_name} = single
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    <h2 className="card-title">Name:{model}</h2>
    <p>Location: {location}</p>
    <p>Original Price: {original_price}</p>
    <p>Resale Price: {resale_price}</p>
    <p>Years of Use: {years_of_use}</p>
    <p>Posted Time: {posted_time}</p>
    <p>Sellers Name: {sellers_name}</p>
    
    <div className="card-actions justify-end">
    <label 
                 htmlFor={`order-modal-${_id}`} type="button"
                 className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-red-600 dark:text-white"
               
                 >Book Now</label>
                  <OrderModal
                 categories ={single}
                 ></OrderModal>
    </div>
  </div>
</div>
        </div>
    );
};

export default SinglePhoneInfo;