from models.Modalidade import Modalidade
from tinydb import Query
from extensions.database import modalidades_db
from flask import jsonify

def cadastra_modalidade(modalidade: dict):
    nova_modalidade = Modalidade(
        **modalidade
    )
    modalidades_query = Query()
    existe_modalidade = modalidades_db.search(modalidades_query.nome == nova_modalidade.nome)
    if(existe_modalidade):
        return jsonify({"status": False, "message": "Modalidade já cadastrada"}), 400
    else:
        try:
            modalidades_db.insert(dict(nova_modalidade))
            return jsonify({"status": True, "message": "Success"}), 201
        except Exception as e:
            return jsonify({"status": False, "message": "Erro ao cadastrar modalidade", "error": f"{e}"}), 400