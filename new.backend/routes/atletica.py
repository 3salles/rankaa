from flask import jsonify
from flask import request
from controllers import atletica


def instala_rota(app):

    @app.route("/atletica", methods=["POST"])
    def cadastra_atletica():
        nova_atletica = request.json
        response = atletica.cadastra_atletica(nova_atletica)
        return response
    
    @app.route("/atletica/<int:id_jogo>", methods=["GET"])
    def get_atletica_by_id(id_jogo):
        response = atletica.get_atletica_by_id(id_jogo)
        return response

    @app.route("/atleticas", methods=["GET"])
    def all_atleticas():
        response = atletica.get_atleticas()
        return response