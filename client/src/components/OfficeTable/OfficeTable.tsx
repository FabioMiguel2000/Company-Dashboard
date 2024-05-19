import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface Office {
  officeCode: string;
  city: string;
  phone: string;
  addressLine1: string;
  addressLine2: string | null;
  state: string | null;
  country: string;
  postalCode: string;
  territory: string;
}

const OfficeTable: React.FC = () => {
  const [offices, setOffices] = useState<Office[]>([]);

  useEffect(() => {
    const fetchOffices = async () => {
      try {
        const response = await fetch("http://localhost:5001/offices/");
        const data = await response.json();
        setOffices(data);
      } catch (error) {
        console.error("Error fetching offices:", error);
      }
    };

    fetchOffices();
  }, []);

  return (
    <div>
      <h2>Offices</h2>
      <div className="table-info">
        <p>Num. Offices: {offices.length}</p>
      </div>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Office Code</th>
              <th>City</th>
              <th>Phone</th>
              <th>Address Line 1</th>
              <th>Address Line 2</th>
              <th>State</th>
              <th>Country</th>
              <th>Postal Code</th>
              <th>Territory</th>
            </tr>
          </thead>
          <tbody>
            {offices.map((office) => (
              <tr key={office.officeCode}>
                <td>{office.officeCode}</td>
                <td>{office.city}</td>
                <td>{office.phone}</td>
                <td>{office.addressLine1}</td>
                <td>{office.addressLine2}</td>
                <td>{office.state}</td>
                <td>{office.country}</td>
                <td>{office.postalCode}</td>
                <td>{office.territory}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OfficeTable;
