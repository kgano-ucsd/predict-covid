from flask import Flask, requests

app = Flask(__name__)

@app.route("/test", methods=["POST"])
def test():
    req_data = requests.json()

    return 



if __name__ == "__main__":
    app.run(port=5001, debug=True)