from flask import Blueprint, jsonify, request
from ..models.employee import Employee
from ..models.customer import Customer
from ..models.payment import Payment
from ..models.order import Order
from ..extensions import db
from sqlalchemy import func

employee_bp = Blueprint('employee_bp', __name__, url_prefix='/employees')

@employee_bp.route('/', methods=['GET'])
def get_employees():
    employees = Employee.query.all()
    return jsonify([employee.to_dict() for employee in employees])

@employee_bp.route('/best_sales_volume/', defaults={'year': 2005}, methods=['GET'])
@employee_bp.route('/best_sales_volume/<int:year>', methods=['GET'])
def get_best_sales_volume_employees(year):
    employees_sales = db.session.query(
        Employee.employeeNumber,
        Employee.lastName,
        Employee.firstName,
        func.sum(Payment.amount).label('total_sales')
    ).join(Customer, Customer.salesRepEmployeeNumber == Employee.employeeNumber) \
     .join(Payment, Payment.customerNumber == Customer.customerNumber) \
     .filter(func.extract('year', Payment.paymentDate) == year) \
     .group_by(Employee.employeeNumber, Employee.lastName, Employee.firstName) \
     .order_by(func.sum(Payment.amount).desc()).all()

    result = [{
        "employeeNumber": employee.employeeNumber,
        "fullName": f"{employee.firstName} {employee.lastName}",
        "lastName": employee.lastName,
        "firstName": employee.firstName,
        "totalSales": float(employee.total_sales)
    } for employee in employees_sales]

    return jsonify(result)

@employee_bp.route('/best_purchase_frequency/',defaults={'year': 2005}, methods=['GET'])
@employee_bp.route('/best_purchase_frequency/<int:year>', methods=['GET'])
def get_best_purchase_frequency_employees(year):
    employees_frequency = db.session.query(
        Employee.employeeNumber,
        Employee.lastName,
        Employee.firstName,
        func.count(Order.orderNumber).label('order_count')
    ).join(Customer, Customer.salesRepEmployeeNumber == Employee.employeeNumber) \
     .join(Order, Order.customerNumber == Customer.customerNumber) \
     .filter(func.extract('year', Order.orderDate) == year) \
     .group_by(Employee.employeeNumber, Employee.lastName, Employee.firstName) \
     .order_by(func.count(Order.orderNumber).desc()).all()

    result = [{
        "employeeNumber": employeeNumber,
        "fullName": f"{firstName} {lastName}",
        "lastName": lastName,
        "firstName": firstName,
        "orderCount": order_count
    } for employeeNumber, lastName, firstName, order_count in employees_frequency]

    return jsonify(result)
