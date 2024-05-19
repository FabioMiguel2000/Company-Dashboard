from flask import Blueprint, jsonify
from ..models.orderdetail import OrderDetail

orderdetail_bp = Blueprint('orderdetail_bp', __name__, url_prefix='/orderdetails')

@orderdetail_bp.route('/', methods=['GET'])
def get_orderdetails():
    orderdetails = OrderDetail.query.all()
    return jsonify([orderdetail.to_dict() for orderdetail in orderdetails])
