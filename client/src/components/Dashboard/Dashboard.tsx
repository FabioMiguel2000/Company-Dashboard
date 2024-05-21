import React from "react";
import "./Dashboard.css";
import { BoxSeamFill, PeopleFill, CartFill, PersonVcardFill } from "react-bootstrap-icons";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="main-card-wrapper">
        <div className="card text-bg-primary mb-3">
          <div className="card-body">
            <h5 className="card-title">Products</h5>
            <BoxSeamFill fontSize={32} />
          </div>
          <p>1232</p>
        </div>
        <div className="card text-bg-success mb-3">
          <div className="card-body">
            <h5 className="card-title">Customers</h5>
            <PeopleFill fontSize={32} />
          </div>
          <p>1232</p>
        </div>
        <div className="card text-bg-danger mb-3">
          <div className="card-body">
            <h5 className="card-title">Orders</h5>
            <CartFill fontSize={32} />
          </div>
          <p>1232</p>
        </div>
        <div className="card text-bg-secondary mb-3">
          <div className="card-body">
            <h5 className="card-title">Employees</h5>
            <PersonVcardFill fontSize={32} />
          </div>
          <p>1232</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
