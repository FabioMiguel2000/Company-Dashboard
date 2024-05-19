import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import CustomerTable from "./components/CustomerTable/CustomerTable";
import OrderTable from "./components/OrderTable/OrderTable";
import ProductTable from "./components/ProductTable/ProductTable";
import OfficeTable from "./components/OfficeTable/OfficeTable";
import ProductLineTable from "./components/ProductLineTable/ProductLineTable";
import PaymentTable from "./components/PaymentTable/PaymentTable";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Container fluid className="content">
          <Routes>
            <Route path="/customers" element={<CustomerTable />} />
            <Route path="/employees" element={<EmployeeTable />} />
            <Route path="/orders" element={<OrderTable />} />
            <Route path="/products" element={<ProductTable />} />
            <Route path="/offices" element={<OfficeTable />} />
            <Route path="/productlines" element={<ProductLineTable />} />
            <Route path="/payments" element={<PaymentTable />} />
            {/* <Route path="/orderdetails" element={<OrderdetailTable />} /> */}
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
