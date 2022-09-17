import React from "react";
import Banners from "../components/Banners";
import Sidebar from "../components/Sidebar";
import Elements from "../components/Elements";


const Maincomp = () => {


  return (
    <div className="container-fluid mt-5 p-0 mx-0">
      <div className="row g-0">
        <div className="col-md-2 border-right ">
          <Sidebar />
        </div>
        <div className="col-md-10 left-border">
          <Banners />

          <div className="Elements-section px-3">

            <Elements />

          </div>

        </div>
      </div>
    </div>
  );
};

export default Maincomp;
