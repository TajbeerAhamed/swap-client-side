import React from 'react';
import { Link, Outlet } from 'react-router-dom';



const DashboardLayout = () => {
    return (
        <div>
          
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">See Dashboard</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>My Orders</a></li>
                        <li><a>Add A Products</a></li>
                       <Link to='/dashboard/allusers'> <li><a>All Users</a></li></Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;