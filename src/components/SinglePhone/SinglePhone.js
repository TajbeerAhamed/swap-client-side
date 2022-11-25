import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePhoneInfo from '../SinglePhoneInfo/SinglePhoneInfo';

const SinglePhone = () => {
    const singlePhone = useLoaderData()
    console.log(singlePhone);
    return (
        <div>
            
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center my-20 mx-10">
        {singlePhone?.map((single) => (
          <SinglePhoneInfo
            key={single._id}
            single={single}
          ></SinglePhoneInfo>
        ))}
      </div>
        </div>
    );
};

export default SinglePhone;