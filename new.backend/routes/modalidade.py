from flask import request
from flask import jsonify
from controllers import modalidade

def instala_rota(app):
   
    @app.route('/modalidade', methods=["POST"])
    def cadastra_modalidade():
        nova_modalidade = request.json
        response = modalidade.cadastra_modalidade(nova_modalidade)
        return response

    @app.route('/modalidades', methods=["GET"])
    def all_modalidade():
        response = modalidade.get_modalidades()
        return response