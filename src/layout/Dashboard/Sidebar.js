import React from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const Sidebar = () => {
  return (
    <div className='col-span-2  p-5 '>
      <ul className='flex gap-3  flex-col h-full'>
        <li>Admin Dashboard</li>
        <li>
          <AdminMenu />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;