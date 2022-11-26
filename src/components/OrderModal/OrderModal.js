import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const OrderModal = ({ categories}) => {
    const { model, location, brand, resale_price, sellers_name ,_id} = categories;
    const { user } = useContext(AuthContext);
    const [items ,setitems]= useState([]);

   useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res=>res.json())
        .then(data=>setitems(data))
    },[items])
    const handleBooking = event => {
        event.preventDefault ();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const formValue = {name ,email:user.email, location,phone,model,price:user};
        console.log(location);
        if (user?.uid) {
            fetch("http://localhost:5000/items", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formValue),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success("Items Added Successfully");
                      
                    }
                })
                .catch((err) => console.log(err));
        } else {
            toast.alert("Please login first to provide Items");
        }
    }
    
        return (
            <>
                <input type="checkbox" id={`order-modal-${_id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box font-poppins relative">
                        <label htmlFor={`order-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg ml-2 font-bold">Brand - {brand}</h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1  gap-3 mt-10'>
                            <input type="model"  disabled value={model} className="input w-full input-bordered" />
                            <input type="price"  disabled value={resale_price} className="input w-full input-bordered" />
                            <input name='name' type="name" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                            <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input w-full input-bordered" />
                            <input name='phone' type="phone" placeholder="Your Phone Number" className="input w-full input-bordered" />
                            <input name='location' type="location" id="location" placeholder="Your Meeting Location" className="input w-full input-bordered" />
                            <br />
                           
                            <div>
                                    <button  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-red-600 dark:text-white"
                type="submit" value="" >Submit </button>
                                </div>
                        </form>

                    </div>
                </div>
            </>
        );
    };

    export default OrderModal;