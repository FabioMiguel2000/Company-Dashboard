from flask import Blueprint, jsonify
from ..models.order import Order

order_bp = Blueprint('order_bp', __name__, url_prefix='/orders')

@order_bp.route('/', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    return jsonify([order.to_dict() for order in orders])
