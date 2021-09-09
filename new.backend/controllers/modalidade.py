from models.Modalidade import Modalidade
from tinydb import Query
from extensions.database import modalidades as table_modalidades
from flask import jsonify


def cadastra_modalidade(modalidade: dict):
    nova_modalidade = Modalidade(
        **modalidade
    )
    modalidades_query = Query()
    existe_modalidade = table_modalidades.search(
        modalidades_query.nome == nova_modalidade.nome)
    if(len(existe_modalidade)):
        return jsonify({"status": False, "message": "Modalidade já cadastrada"}), 400
    else:
        try:
            table_modalidades.insert(dict(nova_modalidade))
            return jsonify({"status": True, "message": "Success"}), 201
        except Exception as e:
            return jsonify({"status": False, "message": "Erro ao cadastrar modalidade", "error": f"{e}"}), 400


def get_modalidades():
    try:
        modalidades = table_modalidades.all()
        return jsonify({"status": True, "message": "Success", "data": modalidades}), 200
    except Exception as e:
        return jsonify({"status": False, "message": "Erro ao recuperar os dados de modalidades", "error": f"{e}"}), 400
