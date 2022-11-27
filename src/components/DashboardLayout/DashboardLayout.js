import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';


import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Header from '../Header/Header';
import useAdmin from '../hooks/useAdmin/useAdmin';


const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
          <Header></Header>
            <div className="drawer drawer-mobile font-poppins">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">See Dashboard</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers" className='text-2xl'>All User</Link></li>
                            </>
                        } */}
                        <Link to="/dashboard/allusers" className='text-2xl'>All User</Link>
                        <li><Link to='/dashboard' className='text-2xl'>My Orders</Link></li>
                        
                        <li><Link to='/dashboard/addproducts' className='text-2xl'>Add A Products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;