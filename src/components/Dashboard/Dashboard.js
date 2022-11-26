import React, { useContext } from 'react';

import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/items?email=${user?.email}`;

    const { data: items = [] } = useQuery({
        queryKey: ['items', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl font-bold mb-10 mt-5 '>Selected Items</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map((item, i) =>
                                <tr key={item._id}>
                                    <th>{i+1}</th>
                                    <th>{item.email}</th>
                                    <td>{item.model}</td>
                                    <td>{item.price}</td>
                                    <td>{item.phone}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;