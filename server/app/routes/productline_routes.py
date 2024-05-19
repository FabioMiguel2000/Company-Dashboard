from flask import Blueprint, jsonify
from ..models.productline import ProductLine

productline_bp = Blueprint('productline_bp', __name__, url_prefix='/productlines')

@productline_bp.route('/', methods=['GET'])
def get_productlines():
    productlines = ProductLine.query.all()
    return jsonify([productline.to_dict() for productline in productlines])
