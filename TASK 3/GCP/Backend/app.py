from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all origins

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Hello from the GCP backend!",
        "service": "Backend API",
        "provider": "Google Cloud Platform"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)