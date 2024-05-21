import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LowStockProducts.css";

interface Product {
  productCode: string;
  productName: string;
  quantityInStock: number;
  quantityLeft: number;
}

const LowStockProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5001/products/low_stock");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="app__low-stock">
      <h2>Low Stock Products</h2>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Quantity Left</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productCode}>
                <td>{product.productCode}</td>
                <td>{product.productName}</td>
                <td>{product.quantityLeft}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default LowStockProducts;
