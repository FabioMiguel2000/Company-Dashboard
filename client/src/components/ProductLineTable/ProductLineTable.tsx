import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProductLine {
  productLine: string;
  textDescription: string;
  htmlDescription: string | null;
  image: string | null;
}

const ProductLineTable: React.FC = () => {
  const [productLines, setProductLines] = useState<ProductLine[]>([]);

  useEffect(() => {
    const fetchProductLines = async () => {
      try {
        const response = await fetch("http://localhost:5001/productlines/");
        const data = await response.json();
        setProductLines(data);
      } catch (error) {
        console.error("Error fetching product lines:", error);
      }
    };

    fetchProductLines();
  }, []);

  return (
    <div>
      <h2>Product Lines</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Line</th>
            <th>Text Description</th>
            <th>HTML Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {productLines.map((productLine) => (
            <tr key={productLine.productLine}>
              <td>{productLine.productLine}</td>
              <td>{productLine.textDescription}</td>
              <td>{productLine.htmlDescription}</td>
              <td>{productLine.image}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductLineTable;
