import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const AllUser = () => {
    const url = `http://localhost:5000/usersList`;

    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = _id =>{
        fetch (`http://localhost:5000/usersList/admin/${_id}`,{
            method:'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successfully')
                refetch();
              
              }
        })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold mb-10 mt-5 '>All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Users</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {/* <td>{user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                <td>{<button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary text-white bg-red-600'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default AllUser;