# from flask import Flask, render_template
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy import MetaData, create_engine, Table, Column, Integer, String
# from .models import Employee

# app = Flask(__name__)

# DATABASE_URI = 'mysql+pymysql://root:root123@db/classicmodels'

# app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)
# engine = create_engine(DATABASE_URI)
# metadata = MetaData()
# metadata.bind = engine

# # class Employees(db.Model):
# #     __table__ = Table('employees', metadata,
# #                       Column('employeeNumber', Integer, primary_key=True),
# #                       Column('lastName', String(50)),
# #                       Column('firstName', String(50)),
# #                       )

# #     def __repr__(self):
# #         return '<Employee %r>' % self.name

# @app.route('/')
# def hello_world():
#     with app.app_context():
#         employees = Employee.query.all()
#     return render_template('index.html', employees=employees)

# if __name__ == '__main__':
#     app.run(host='0.0.0.0')
