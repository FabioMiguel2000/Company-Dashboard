from flask import Blueprint, jsonify, Flask
from ..models.customer import Customer
from ..models.payment import Payment
from ..extensions import db
from sqlalchemy import func

customer_bp = Blueprint('customer_bp', __name__, url_prefix='/customers')

@customer_bp.route('/', methods=['GET'])
def get_customers():
    customers = Customer.query.all()
    return jsonify([customer.to_dict() for customer in customers])

@customer_bp.route('/top_spenders/', defaults={'percentage': 20}, methods=['GET'])
@customer_bp.route('/top_spenders/<int:percentage>', methods=['GET'])
def get_top_spenders(percentage):
    if percentage < 1 or percentage > 100:
        return jsonify({"error": "Percentage must be between 1 and 100"}), 400
    
    customer_spending = db.session.query(
        Customer.customerNumber,
        Customer.customerName,
        func.sum(Payment.amount).label('total_spent')
    ).join(Payment, Customer.customerNumber == Payment.customerNumber) \
     .group_by(Customer.customerNumber, Customer.customerName) \
     .order_by(func.sum(Payment.amount).desc()) \
     .all()

    total_customers = len(customer_spending)
    top_percent_count = max(1, total_customers * percentage // 100)  

    top_spenders = customer_spending[:top_percent_count]

    result = [{
        "customerNumber": customer_number,
        "customerName": customer_name,
        "totalSpent": float(total_spent)
    } for customer_number, customer_name, total_spent in top_spenders]

    return jsonify(result)