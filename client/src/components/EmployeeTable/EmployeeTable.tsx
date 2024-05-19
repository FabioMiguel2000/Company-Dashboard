import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div>
      <h2>Employees</h2>
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
  );
};

export default EmployeeTable;