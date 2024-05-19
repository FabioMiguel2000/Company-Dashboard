import os

class Config:
    DATABASE_URI = 'mysql+pymysql://root:root123@db/classicmodels'
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI', DATABASE_URI)
    SQLALCHEMY_TRACK_MODIFICATIONS = False