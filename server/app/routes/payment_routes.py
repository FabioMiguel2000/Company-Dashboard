from flask import Blueprint, jsonify
from ..models.payment import Payment

payment_bp = Blueprint('payment_bp', __name__, url_prefix='/payments')

@payment_bp.route('/', methods=['GET'])
def get_payments():
    payments = Payment.query.all()
    return jsonify([payment.to_dict() for payment in payments])
