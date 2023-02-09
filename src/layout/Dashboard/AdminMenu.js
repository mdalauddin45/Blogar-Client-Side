import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    `flex items-center  py-4 border rounded-lg mt-5 mx-0   transition-colors duration-300 transform  hover:bg-red-500   hover:text-white ${isActive ? "bg-red-500 text-white" : "text-gray-600"
                    }`
                }
            >
                <span className="px-4 font-medium">Blog List</span>
            </NavLink>
            <NavLink
                to="add-blog"
                className={({ isActive }) =>
                    `flex items-center py-4 border rounded-lg mt-5 mx-0   transition-colors duration-300 transform  hover:bg-red-500 hover:text-white ${isActive ? "bg-red-500text-white" : "text-gray-600"
                    }`
                }
            >
                <span className="px-4 font-medium">Add Blog</span>
            </NavLink>

        </>
    );
};

export default AdminMenu;