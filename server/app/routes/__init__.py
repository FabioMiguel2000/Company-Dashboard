from flask import Blueprint
from .employee_routes import employee_bp

def create_routes(app):
    app.register_blueprint(employee_bp)