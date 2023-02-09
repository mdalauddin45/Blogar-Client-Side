import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className='relative min-h-screen md:flex lg:flex lg:py-20'>
      <Sidebar />
      <div className='col-span-10 w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;