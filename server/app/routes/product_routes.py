from flask import Blueprint, jsonify
from ..models.product import Product
from ..models.orderdetail import OrderDetail
from ..extensions import db
from sqlalchemy import func

product_bp = Blueprint('product_bp', __name__, url_prefix='/products')

@product_bp.route('/', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

@product_bp.route('/best_selling', methods=['GET'])
def get_best_selling_products():
    best_selling_products = db.session.query(
        Product.productCode,
        Product.productName,
        func.sum(OrderDetail.quantityOrdered).label('total_quantity')
    ).join(OrderDetail, Product.productCode == OrderDetail.productCode) \
     .group_by(Product.productCode, Product.productName) \
     .order_by(func.sum(OrderDetail.quantityOrdered).desc()) \
     .all()

    result = [{
        "productCode": product_code,
        "productName": product_name,
        "total_quantity": total_quantity
    } for product_code, product_name, total_quantity in best_selling_products]

    return jsonify(result)