import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface OrderDetail {
  orderNumber: number;
  productCode: string;
  quantityOrdered: number;
  priceEach: number;
  orderLineNumber: number;
}

const OrderDetailTable: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch("http://localhost:5001/orderdetails/");
        const data = await response.json();
        setOrderDetails(data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <div>
      <h2>Order Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Product Code</th>
            <th>Quantity Ordered</th>
            <th>Price Each</th>
            <th>Order Line Number</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((orderDetail) => (
            <tr key={`${orderDetail.orderNumber}-${orderDetail.productCode}`}>
              <td>{orderDetail.orderNumber}</td>
              <td>{orderDetail.productCode}</td>
              <td>{orderDetail.quantityOrdered}</td>
              <td>{orderDetail.priceEach}</td>
              <td>{orderDetail.orderLineNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderDetailTable;
