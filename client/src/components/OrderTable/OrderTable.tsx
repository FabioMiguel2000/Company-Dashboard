import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Order {
  orderNumber: number;
  orderDate: string;
  requiredDate: string;
  shippedDate: string | null;
  status: string;
  comments: string | null;
  customerNumber: number;
}

const OrderTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5001/orders/");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Order Date</th>
            <th>Required Date</th>
            <th>Shipped Date</th>
            <th>Status</th>
            <th>Comments</th>
            <th>Customer Number</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderNumber}>
              <td>{order.orderNumber}</td>
              <td>{order.orderDate}</td>
              <td>{order.requiredDate}</td>
              <td>{order.shippedDate}</td>
              <td>{order.status}</td>
              <td>{order.comments}</td>
              <td>{order.customerNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderTable;
