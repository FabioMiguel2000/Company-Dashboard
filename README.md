# Company-Dashboard

![Flask](https://img.shields.io/badge/flask-v3.0.3-green)
![React](https://img.shields.io/badge/react-v18.2.0-blue)
![MySQL](https://img.shields.io/badge/mysql-v8.0.37-blue)


<p align="center">
  <img width="600" alt="imagem" src="https://github.com/FabioMiguel2000/Company-Dashboard/assets/50105554/b7c260e8-7f76-42e4-87a2-2d032e32ec7d">


## CONTEXT

Application to analyze the office, the employees, products, and customers that exist in DB;

- **Offices**: Allows analysis of office details, including size in terms of employees and a number of customers.
- **Products**: Offers information on products, including those low in stock and the best-selling products.
- **Employees**: Provides insights into employee data, such as potential promotions for the last year: sales volume and frequency of purchases.
- **Customers**:Which customers should receive a 10% discount as they are among the top 20% of customers;

## Screenshots

<table>
   <tr>
    <th>Dashboard Home Page</th>
    <th><img src="https://github.com/FabioMiguel2000/Company-Dashboard/assets/50105554/b4ebc334-b778-4d6e-87e1-eaca7f7b0ed0" alt="HomePage"></th>
  </tr>
  <tr>
    <th>Employees Page</th>
    <th><img src="https://github.com/FabioMiguel2000/Company-Dashboard/assets/50105554/d5ac6a14-a8ab-41f1-bda4-6af4480e8f5f" alt="LoginPage"></th>
  </tr>
    <tr>
    <th>Customers Page</th>
    <th><img src="https://github.com/FabioMiguel2000/Company-Dashboard/assets/50105554/4b3aa345-e51f-4ac3-9005-475afb5ef885" alt="QuestionPage"></th>
  </tr>
</table>

## How to run

To prepare your computer for development you need to install [Docker Desktop](https://www.docker.com/products/docker-desktop/).

### Local Setup

#### Deploy Local Server 

1. Clone the repository

```bash
git clone https://github.com/FabioMiguel2000/Company-Dashboard.git
```

2. Head inside the project directory `/Company-Dashboard`:
   
```bash
cd /Company-Dashboard

```

4. There is a docker-compose file that builds and runs 2 containers, the Flask REST API server, and the React.JS client:

```bash
docker-compose up -d
```

6. You should be able to run the client application on:

```bash

http://localhost:3000/

```

and the REST API on:

```bash
http://localhost:5001/

```

## Available API Endpoints

### Cutomers
```
/customers

/customers/top_spenders

/customers/top_spenders/{percentage}
```

### Employees
```
/employees

/employees/best_sales_volume

/employees/best_sales_volume/{year}

/employees/best_purchase_frequency/

/employees/best_purchase_frequency/{year}
```

### Offices
```
/offices
```

### Orders
```
/orders
```

### Order Details
```
/orderdetails
```

### Payments
```
/payments
```

### Products
```
/products

/products/best_selling

/products/low_stock
```

### Product Lines
```
/productlines
```

## License

This project is licensed under the Apache License, Version 2.0.

For the complete text of the Apache License, please refer to the ![Apache License](https://github.com/FabioMiguel2000/Company-Dashboard/blob/main/LICENSE).
