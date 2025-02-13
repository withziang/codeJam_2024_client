from flask import make_response, request, Blueprint, jsonify
from src.controllers.questionGeneration import *
from src.controllers.feedbackGeneration import *

bp = Blueprint('bp', __name__)

API_URL = "/mockterview/"


@bp.route(API_URL + 'get-question', methods=['POST'])
def getQuestion():
    """ get question from category of interview"""
    try:
        paras = request.get_json()
        response = questionGenerator(paras)
        return make_response(response)
    except Exception as e:
        return make_response(str(e), 500)
    

@bp.route(API_URL + 'get-feedback', methods=['POST'])
def getFeedback():
    """ Sample api end point, return a string """
    try:
        paras = request.get_json()
        response = feedbackGenerator(paras)
        return make_response(response)
    except Exception as e:
        return make_response(str(e), 500)

