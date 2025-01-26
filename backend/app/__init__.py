# Flask app 初期化

from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)  # CORS対応を有効にする

    from .routes import main
    app.register_blueprint(main)

    return app

