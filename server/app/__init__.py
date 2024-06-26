from flask import Flask
from .config import Config
from .extensions import db
from .routes import create_routes
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)
    create_routes(app)

    return app