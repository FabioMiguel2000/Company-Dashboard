import "./Dashboard.css";
import {
  BoxSeamFill,
  PeopleFill,
  CartFill,
  PersonVcardFill,
} from "react-bootstrap-icons";
import TopSellingProductsChart from "../TopSellingProductsChart/TopSellingProductsChart";
import LowStockProducts from "../LowStockProducts/LowStockProducts";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="main-card-wrapper">
        <div className="card text-bg-primary mb-3">
          <div className="card-body">
            <h5 className="card-title">Products</h5>
            <p>1232</p>
          </div>
          <BoxSeamFill />
        </div>
        <div className="card text-bg-success mb-3">
          <div className="card-body">
            <h5 className="card-title">Customers</h5>
            <p>1232</p>
          </div>
          <PeopleFill />
        </div>
        <div className="card text-bg-danger mb-3">
          <div className="card-body">
            <h5 className="card-title">Orders</h5>
            <p>1232</p>
          </div>
          <CartFill />
        </div>
        <div className="card text-bg-secondary mb-3">
          <div className="card-body">
            <h5 className="card-title">Employees</h5>
            <p>1232</p>
          </div>
          <PersonVcardFill />
        </div>
      </div>
      <div className="diagrams-wrapper">
        <div className="diagram-container">
          <TopSellingProductsChart />
        </div>
        <div className="diagram-container">
          <LowStockProducts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
