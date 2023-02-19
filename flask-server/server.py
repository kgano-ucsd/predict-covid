from flask import Flask, request, Response, send_file
import json
from io import BytesIO
import bcrypt
import uuid


app = Flask(__name__)


def test_operation(input):
    input["Test_1"] = "TEST_PASSED"
    input["Test_2"] = "TEST_PASSED"
    input["Test_3"] = "TEST_PASSED"
    return input


@app.route("/get_patient", methods=["POST"])
def send_patient_data():
    print(request.get_json())
    patient_id = request.get_json()['packet']['id']

    file = open('./database/patient_info.json')
    data = json.load(file)
    for patient_info in data:
        if patient_info['id'] == str(patient_id):
            return patient_info
    return Response(status=204)



@app.route("/database/<patient_id>/<filename>", methods=["GET"])
def sendit(patient_id, filename):
    # print(request.get_json())
    # patient_id = request.get_json()['packet']['id']

    file = send_file('./database/' + patient_id + "/" +
                     filename, mimetype='image/png')

    return file


@app.route("/test_post", methods=["POST"])
def test_post():
    req_data = request.get_json()
    out = test_operation(req_data)

    return out


if __name__ == "__main__":
    app.run(port=5001, debug=True)
