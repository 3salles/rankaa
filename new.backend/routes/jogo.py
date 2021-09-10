from flask import jsonify
from flask import request
from controllers import jogo


def instala_rota(app):

    @app.route("/jogo", methods=["POST"])
    def cadastra_jogo():
        novo_jogo = request.json
        response = jogo.cadastra_jogo(novo_jogo)
        return response

    @app.route("/jogo/<int:id_jogo>", methods=["GET", "PUT"])
    def get_edit_jogo(id_jogo):
        if(request.method == "GET"):
            response = jogo.get_jogo_by_id(id_jogo)
        elif(request.method == "PUT"):
            dados = request.json
            response = jogo.edita_jogo_by_id(dados, id_jogo)
        return response
    
    @app.route("/jogos", methods=["GET"])
    def all_jogos():
        jogos = jogo.get_jogos()
        return jogos
    
    
