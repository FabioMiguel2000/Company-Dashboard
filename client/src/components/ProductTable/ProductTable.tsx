import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface Product {
  productCode: string;
  productName: string;
  productLine: string;
  productScale: string;
  productVendor: string;
  productDescription: string;
  quantityInStock: number;
  buyPrice: number;
  MSRP: number;
}

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5001/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="table-container">
      <div className="table-info">
          <p>Num. Products: {products.length}</p>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Product Line</th>
              <th>Product Scale</th>
              <th>Product Vendor</th>
              <th>Product Description</th>
              <th>Quantity In Stock</th>
              <th>Buy Price</th>
              <th>MSRP</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productCode}>
                <td>{product.productCode}</td>
                <td>{product.productName}</td>
                <td>{product.productLine}</td>
                <td>{product.productScale}</td>
                <td>{product.productVendor}</td>
                <td>{product.productDescription}</td>
                <td>{product.quantityInStock}</td>
                <td>{product.buyPrice}</td>
                <td>{product.MSRP}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProductTable;
