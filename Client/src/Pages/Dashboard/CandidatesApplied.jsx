import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
// import {Details}  from "../Details/Details";
import AdminDashboard from "../Details/CandidateApplied"

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-11">
        <div className="sm:hidden lg:block xl:col-span-3">
          <Sidebar />
        </div>
        <div id="details" className="sm:col-span-11 lg:col-span-8 ">
          <AdminDashboard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
