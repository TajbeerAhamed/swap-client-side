
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyProduct from './MyProduct';

const MyProducts = () => {

    const url = `https://swap-server-site.vercel.app/myProducts`;

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })



    return (
        <div>
            <h1 className='text-3xl font-bold mb-10 mt-5 '>My Products</h1>

            <div className='grid md:grid-cols-2 gap-3 my-20'>
                {
                    myProducts.map((myProduct) => <MyProduct
                        key={myProduct._id}
                        myProduct={myProduct}
                    ></MyProduct>
                    )}
            </div>
        </div>
    );
};

export default MyProducts;