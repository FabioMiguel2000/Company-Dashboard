import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

interface Customer {
  customerNumber: number;
  customerName: string;
  contactLastName: string;
  contactFirstName: string;
}

const CustomerTable: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/customers/")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Customer Number</th>
            <th>Customer Name</th>
            <th>Contact Last Name</th>
            <th>Contact First Name</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerNumber}>
              <td>{customer.customerNumber}</td>
              <td>{customer.customerName}</td>
              <td>{customer.contactLastName}</td>
              <td>{customer.contactFirstName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CustomerTable;
