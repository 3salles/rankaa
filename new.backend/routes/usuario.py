from flask import jsonify
from flask import request
from controllers import usuario

def instala_rota(app):
    @app.route('/usuario', methods=["POST"])
    def cadastra_usuario():
        novo_usuario = request.json
        response = usuario.cadastra_usuario(novo_usuario)
        return response

    @app.route('/auth', methods=["POST"])
    def autentica_usuario():
        auth = request.authorization
        response = usuario.autentica_usuario(auth)
        return response