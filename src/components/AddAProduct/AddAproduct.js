import React, { useContext } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";


const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const handleAddProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const model = form.model.value;
    const originl_price = form.originalPrice.value;
    const resale_price = form.resalePrice.value;
    const condition = form.condition.value;
    const phone_number = form.phoneNumber.value;
    const imageURL = form.imageURL.value;
    const location = form.location.value;
    const description = form.description.value;
    const year_of_purchase = form.yearOfPurchase.value;

    const product = {
      email,
      model,
      originl_price,
      resale_price,
      condition,
      phone_number,
      imageURL,
      location,
      description,
      year_of_purchase,
    };

    console.log(product);
    fetch(`https://swap-server-site.vercel.app/myproducts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Confirmed", {
            position: "top-center",
            autoClose: 800,
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-2xl mt-5 text-red-600 font-semibold">Add a Product</h1>
      <form onSubmit={handleAddProducts} action="" className="mt-5 ">
        <div className="my-3">
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="Seller's email here"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="model"
            placeholder="Product Name Here"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="originalPrice"
            placeholder="Original Price in BDT"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="resalePrice"
            placeholder="Resale Price in BDT"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div>
          <select name="condition" className="select select-bordered w-4/5">
            <option disabled selected>
              Conditon
            </option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>
        <div className="my-3">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            name="imageURL"
            placeholder="Put car's image url here"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <div className="my-3">
          <textarea
            className="textarea textarea-bordered w-4/5"
            name="description"
            placeholder="Product Description"
          ></textarea>
        </div>
        <div className="my-3">
          <label htmlFor="">Year Of Purchase</label>
          <input
            type="date"
            name="yearOfPurchase"
            placeholder="Year Of Purchase"
            className="input input-bordered w-4/5 ml-4"
          />
        </div>
        <button type="submit" className="btn btn-primary text-white hover:bg-red-700 bg-red-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAProduct;