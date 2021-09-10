from models.Atletica import Atletica
from tinydb import Query
from extensions.database import atleticas as table_atleticas
from flask import jsonify


def cadastra_atletica(atletica: dict):
    novo_atletica = Atletica(**atletica)
    atletica_query = Query()
    try:
        existe_atletica = table_atleticas.search(
            atletica_query.nome == novo_atletica.nome)
        if(len(existe_atletica)):
            return jsonify({"status": False, "message": "Atlética já cadastrada"}), 400
        else:
            try:
                table_atleticas.insert(dict(novo_atletica))
                return jsonify({"status": True, "message": "Success"}), 201
            except Exception as e:
                return jsonify({"status": False, "message": "Erro ao cadastrar atlética", "error": f"{e}"}), 400
    except Exception as e:
        return jsonify({"status": False, "message": "Erro ao acessar banco de dados", "error": f"{e}"}), 500


def get_atletica_by_id(id: int):
    atletica_query = Query()
    try:
        existe_atletica = table_atleticas.search(atletica_query.id == id)
        if(len(existe_atletica)):
            return jsonify({"status": True, "message": "Success", "data": existe_atletica[0]}), 200
        else:
            return jsonify({"status": False, "message": "Atlética não encontrada"}), 200
    except Exception as e:
        return jsonify({"status": False, "message": "Erro ao acessar banco de dados", "error": f"{e}"}), 500


def get_atleticas():
    try:
        atleticas = table_atleticas.all()
        if(len(atleticas)):
            return jsonify({"status": True, "message":"Success", "data":atleticas}), 200
        else:
            return jsonify({"status": True, "message":"Nenhuma atletica cadastrada"}), 200
    except Exception as e:
        return jsonify({"status": False, "message": "Erro ao acessar banco de dados", "error": f"{e}"}), 500
