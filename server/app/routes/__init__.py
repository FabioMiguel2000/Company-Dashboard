from .employee_routes import employee_bp
from .productline_routes import productline_bp
from .product_routes import product_bp
from .office_routes import office_bp
from .customer_routes import customer_bp
from .payment_routes import payment_bp
from .order_routes import order_bp
from .orderdetail_routes import orderdetail_bp

def create_routes(app):
    app.register_blueprint(employee_bp)
    app.register_blueprint(productline_bp)
    app.register_blueprint(product_bp)
    app.register_blueprint(office_bp)
    app.register_blueprint(customer_bp)
    app.register_blueprint(payment_bp)
    app.register_blueprint(order_bp)
    app.register_blueprint(orderdetail_bp)
