import "./Dashboard.css";
import {
  BoxSeamFill,
  PeopleFill,
  CartFill,
  PersonVcardFill,
} from "react-bootstrap-icons";
import TopSellingProductsChart from "../TopSellingProductsChart/TopSellingProductsChart";
import LowStockProducts from "../LowStockProducts/LowStockProducts";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="main-card-wrapper">
        <Link to="/products" className="card text-bg-primary mb-3 card-link">
          <div className="card-body">
            <h5 className="card-title">Products</h5>
            <p>110</p>
          </div>
          <BoxSeamFill />
        </Link>
        <Link to="/customers" className="card text-bg-success mb-3 card-link">
          <div className="card-body">
            <h5 className="card-title">Customers</h5>
            <p>122</p>
          </div>
          <PeopleFill />
        </Link>
        <Link to="/orders" className="card text-bg-danger mb-3 card-link">
          <div className="card-body">
            <h5 className="card-title">Orders</h5>
            <p>326</p>
          </div>
          <CartFill />
        </Link>
        <Link to="/employees" className="card text-bg-secondary mb-3 card-link">
          <div className="card-body">
            <h5 className="card-title">Employees</h5>
            <p>23</p>
          </div>
          <PersonVcardFill />
        </Link>
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
