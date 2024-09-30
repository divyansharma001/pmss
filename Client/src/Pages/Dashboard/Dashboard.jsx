import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Details  from "../Details/Details";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar/>
        </div>
        <div id="details" className="col-span-8">
          <Details />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
