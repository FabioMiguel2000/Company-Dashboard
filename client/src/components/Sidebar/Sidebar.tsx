import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="app__sidebar">
      <ListGroup>
        <ListGroup.Item>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink
            to="/employees"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Employees
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink
            to="/customers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Customers
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Orders
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Products
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink
            to="/offices"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Offices
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink
            to="/productlines"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Product Lines
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink
            to="/payments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Payments
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink
            to="/orderdetails"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Order Details
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
