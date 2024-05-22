import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import HorizontalBarChart from "../HorizontalBarChart/HorizontalBarChart";
import "./EmployeeTable.css";

interface Employee {
  employeeNumber: number;
  lastName: string;
  firstName: string;
  extension: string;
  email: string;
  officeCode: string;
  reportsTo: number | null;
  jobTitle: string;
}

const EmployeeTable: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:5001/employees/");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="app__employee-table">
      <h2>Employees</h2>

      <div className="table-info">
        <p>Num. Employees: {employees.length}</p>
      </div>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Employee Number</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Extension</th>
              <th>Email</th>
              <th>Office Code</th>
              <th>Reports To</th>
              <th>Job Title</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employeeNumber}>
                <td>{employee.employeeNumber}</td>
                <td>{employee.lastName}</td>
                <td>{employee.firstName}</td>
                <td>{employee.extension}</td>
                <td>{employee.email}</td>
                <td>{employee.officeCode}</td>
                <td>{employee.reportsTo}</td>
                <td>{employee.jobTitle}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="best-employees-container">
        <HorizontalBarChart
          endpoint="http://localhost:5001/employees/best_sales_volume"
          label="Top Employees by Sales Volume"
          xField="fullName"
          yField="totalSales"
        />
        <HorizontalBarChart
          endpoint="http://localhost:5001/employees/best_purchase_frequency"
          label="Top Employees by Purchase Frequency"
          xField="fullName"
          yField="orderCount"
        />
      </div>
    </div>
  );
};

export default EmployeeTable;
