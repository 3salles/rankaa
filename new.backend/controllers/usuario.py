from models.Usuario import Usuario
from extensions.database import usuarios_db
from tinydb import Query
from flask import jsonify
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash


def cadastra_usuario(usuario: dict):
    novo_usuario = usuario
    novo_usuario["password"] = generate_password_hash(novo_usuario["password"])
    usuarios_query = Query()
    usuario_existe = usuarios_db.search(
        usuarios_query.email == novo_usuario["email"])

    if(len(usuario_existe)):
        return jsonify({"status": False, "message": "Usuário já cadastrado"}), 400
    else:
        try:
            usuarios_db.insert(novo_usuario)
            return jsonify({"status": True, "message": "Success", "data": {"nome": novo_usuario["nome"], "email": novo_usuario["email"]}}), 201
        except Exception as e:
            return jsonify({"status": False, "message": "Erro ao cadastrar usuário", "error": f"{e}"}), 400


def autentica_usuario(auth):
    usuarios_query = Query()
    usuario_existe = usuarios_db.search(
        usuarios_query.email == auth.username[1:-1])

    if not auth or not auth.username or not auth.password:
        return jsonify({"status": False, "message": "Could not verify", "WWW-Authenticate": "Basic auth='Login required'"}), 401

    if(len(usuario_existe)):
        if(check_password_hash(usuario_existe[0]["password"], auth.password[1:-1])):
            return jsonify({"status": True, "message": "Success"}), 200
        else:
            return jsonify({"status": False, "message": "Could not verify", "WWW-Authenticate": "Basic auth='Login required'"}), 401

    # return jsonify({"message":"success"})