import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";
import "./CustomerTable.css";

interface Customer {
  customerNumber: number;
  customerName: string;
  contactLastName: string;
  contactFirstName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  salesRepEmployeeNumber: number | null;
  creditLimit: number | null;
}

const Customers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:5001/customers/");
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <div className="content-wrapper">
        <div className="table-section">
          <div className="table-info">
            <p>Num. Customers: {customers.length}</p>
          </div>
          <div className="table-container">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Customer Number</th>
                  <th>Customer Name</th>
                  <th>Contact Last Name</th>
                  <th>Contact First Name</th>
                  <th>Phone</th>
                  <th>Address Line 1</th>
                  <th>Address Line 2</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Postal Code</th>
                  <th>Country</th>
                  <th>Sales Rep Employee Number</th>
                  <th>Credit Limit</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.customerNumber}>
                    <td>{customer.customerNumber}</td>
                    <td>{customer.customerName}</td>
                    <td>{customer.contactLastName}</td>
                    <td>{customer.contactFirstName}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.addressLine1}</td>
                    <td>{customer.addressLine2}</td>
                    <td>{customer.city}</td>
                    <td>{customer.state}</td>
                    <td>{customer.postalCode}</td>
                    <td>{customer.country}</td>
                    <td>{customer.salesRepEmployeeNumber}</td>
                    <td>{customer.creditLimit}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="chart-section">
          <HorizontalBarChart
            endpoint="http://localhost:5001/customers/top_spenders/"
            label="Top 20% Customers by Total Spent"
            xField="customerName"
            yField="totalSpent"
            showLabels={false}
            topQuantity={9999}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
