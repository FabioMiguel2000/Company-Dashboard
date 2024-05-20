from flask import Blueprint, jsonify
from ..models.office import Office

office_bp = Blueprint('office_bp', __name__, url_prefix='/offices')

@office_bp.route('/', methods=['GET'])
def get_offices():
    offices = Office.query.all()
    return jsonify([office.to_dict() for office in offices])