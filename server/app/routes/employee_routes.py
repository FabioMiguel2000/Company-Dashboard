from flask import Blueprint, jsonify
from ..models.employee import Employee

employee_bp = Blueprint('employee_bp', __name__, url_prefix='/employees')

@employee_bp.route('/', methods=['GET'])
def get_employees():
    employees = Employee.query.all()
    return jsonify([employee.to_dict() for employee in employees])
