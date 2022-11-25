import OrderModal from "../OrderModal/OrderModal";


const AllPhonesDetails = ({allPhone}) => {
    const {picture,brand,model,location,original_price,resale_price,years_of_use,posted_time,sellers_name,_id} = allPhone
   
  
    return (
        <div className="card lg:card-side bg-base-100 mr-10 mt-10 shadow-xl text-gray-500">
        <figure><img  src={picture} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">Brand: {brand}</h2>
          <h2 className="card-title">Model: {model}</h2>
          <p>Price: Tk{original_price}</p>
          <p>Resale_Price: Tk{resale_price}</p>
          <p>Location: {location}</p>
          <p>Years_of_Use: {years_of_use}</p>
          <p>posted_time: {posted_time}</p>
          <p>Sellers_Name: {sellers_name}</p>
          <div className="card-actions justify-end">
          <label 
                 htmlFor={`order-modal-${_id}`} type="button"
                 className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-red-600 dark:text-white"
               
                 >Book Now</label>
                 <OrderModal
                 categories ={allPhone}
                 ></OrderModal>
         
          </div>
        </div>
      </div>

    );
};

export default AllPhonesDetails;