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
  const cardData = [
    {
      to: "/products",
      title: "Products",
      count: 110,
      icon: <BoxSeamFill />,
      className: "text-bg-primary",
    },
    {
      to: "/customers",
      title: "Customers",
      count: 122,
      icon: <PeopleFill />,
      className: "text-bg-success",
    },
    {
      to: "/orders",
      title: "Orders",
      count: 326,
      icon: <CartFill />,
      className: "text-bg-danger",
    },
    {
      to: "/employees",
      title: "Employees",
      count: 23,
      icon: <PersonVcardFill />,
      className: "text-bg-secondary",
    },
  ];
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="main-card-wrapper">
        {cardData.map((card, index) => (
          <Link
            to={card.to}
            className={`card ${card.className} mb-3 card-link`}
            key={index}
          >
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p>{card.count}</p>
            </div>
            {card.icon}
          </Link>
        ))}
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
