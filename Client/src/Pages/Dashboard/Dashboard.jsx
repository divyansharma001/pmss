import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Details } from "../Details/Details";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-11">
        <div className="sm:hidden lg:block lg:col-span-3">
          <Sidebar />
        </div>
        <div id="details" className="sm:col-span-11 lg:col-span-8 ">
          <Details />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
