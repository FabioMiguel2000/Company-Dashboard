import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface Payment {
  customerNumber: number;
  checkNumber: string;
  paymentDate: string;
  amount: number;
}

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch("http://localhost:5001/payments/");
        const data = await response.json();
        setPayments(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h2>Payments</h2>
      <div className="table-container">
      <div className="table-info">
          <p>Num. Payments: {payments.length}</p>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Customer Number</th>
              <th>Check Number</th>
              <th>Payment Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={`${payment.customerNumber}-${payment.checkNumber}`}>
                <td>{payment.customerNumber}</td>
                <td>{payment.checkNumber}</td>
                <td>{payment.paymentDate}</td>
                <td>{payment.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Payments;
