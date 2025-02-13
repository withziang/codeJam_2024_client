from flask import Flask
from flask_cors import CORS
from flask_session import Session

from src.routes.clientRoute import bp

# start the app
app = Flask(__name__)
app.register_blueprint(bp)


CORS(app, resources={r"*": {"origins": "*"}})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=15060, debug=True)
    app.config['SESSION_TYPE'] = 'filesystem'
    Session(app)
