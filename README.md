# Company-Dashboard

## CONTEXT

Application to analyzes the office, the employees, products and customers that exist in DB;

- **Offices**: Allows analysis of office details, including size in terms of employees and number of customers.
- **Products**: Offers information on products, including those low in stock and the best-selling products.
- **Employees**: Provides insights into employee data, such as potential promotions for the last year: sales volume and frequency of purchases.
- **Customers**:Which customers should receive an 10% discount as they are among the top 20% customers;

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

## License

This project is licensed under the Apache License, Version 2.0.

For the complete text of the Apache License, please refer to the ![Apache License](https://github.com/FabioMiguel2000/Company-Dashboard/blob/main/LICENSE).