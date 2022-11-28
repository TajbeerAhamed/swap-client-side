import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItem from './AdvertiseItems';

const AdvertiseItems = () => {

    const url = `https://swap-server-site.vercel.app/advertise`;

    const { data: advertiseItems = [], refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (

        <div>
            <h1 className='text-3xl font-bold mb-10 mt-5 '>Advertised Items</h1>

            <div className='grid md:grid-cols-3 gap-3 my-20'>

                {
                    advertiseItems.map((advertiseItem) => <AdvertisedItem
                        key={advertiseItem._id}
                        advertiseItem={advertiseItem}
                    ></AdvertisedItem>
                    )}
            </div>
        </div>
    );
};

export default AdvertiseItems;