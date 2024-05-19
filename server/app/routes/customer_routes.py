from flask import Blueprint, jsonify
from ..models.customer import Customer

customer_bp = Blueprint('customer_bp', __name__, url_prefix='/customers')

@customer_bp.route('/', methods=['GET'])
def get_customers():
    customers = Customer.query.all()
    return jsonify([customer.to_dict() for customer in customers])
