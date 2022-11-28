
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const AdvertisedItem = ({ advertiseItem }) => {
    const{user} = useContext(AuthContext)
    const [displayUser, setDisplayUser] = useState();
    const {
        picture,
        brand,
        model,
        location,
        original_price,
        resale_price,
        years_of_use,
        posted_time,
        seller_name
    } = advertiseItem;

    const handleDeleteUser = _id => {


        fetch(`https://swap-server-site.vercel.app/advertise/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log(data.deletedCount);
                    toast.success("Product Deleted Succesfully")
                    const remainingUsers = displayUser.filter(usr => usr._id !== _id);
                    setDisplayUser(remainingUsers);
                }
            })
    }

    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="" /></figure>
                    <div className="card-body">

                        <h2 className="card-title">{brand}</h2>
                        <p>Model : {model}</p>
                        <p>Location : {location}</p>
                        <p>Original Price : {original_price}</p>
                        <p>Resale Value : {resale_price}</p>
                        <p>Years Of Use : {years_of_use}</p>
                        <p>Seller Name : {seller_name}</p>
                        <p>Posted Time : {posted_time}</p>
                        {
                          user?.role !== 'admin' &&  user?.role !== 'seller' &&  <button onClick={() => handleDeleteUser(advertiseItem._id)} className='btn btn-danger'>Delete</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;