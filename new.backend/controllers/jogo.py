from models.Jogo import Jogo
from tinydb import Query
from extensions.database import jogos as table_jogos
from flask import jsonify
from datetime import datetime

def cadastra_jogo(jogo: dict):
    novo_jogo = Jogo(**jogo)
    try:
        table_jogos.insert(dict(novo_jogo))
        return jsonify({"status": True, "message": "Success"}), 201
    except Exception as e:
        return jsonify({"status": False, "message": "Erro ao cadastrar jogo", "error": f"{e}"}), 400


def edita_jogo_by_id(id: int, jogo: dict):
    jogo_query = Query()
    try:
        existe_jogo = table_jogos.search(jogo_query.id == id)
        jogo["edited_at"] = datetime.now().strftime("%d/%m/%Y")
        jogo["has_edited"] = True
        if(len(existe_jogo)):
            try:
                table_jogos.update(jogo, jogo_query.id == id)
                return jsonify({"status": True, "message": "Success"}), 204
            except Exception as e:
                return jsonify({"status": False, "message": "Erro ao atualizar os dados de jogo", "error": f"{e}"}), 400
        else:
            return jsonify({"status": False, "message": "Jogo não encontrado"}), 200
    except Exception as e:
        return jsonify({"status": False, "message": "Erro ao acessar o banco de dados", "error": f"{e}"}), 500


def get_jogo_by_id(id: int):
    jogo_query = Query()
    try:
        existe_jogo = table_jogos.search(jogo_query.id == id)
        if(len(existe_jogo)):
            return jsonify({"status": True, "message": "Success", "data": existe_jogo[0]}), 200
        else:
            return jsonify({"status": False, "message": "Jogo não encontrado"}), 200
    except Exception as e:
        return jsonify({"status": False, "message": f"Erro ao recuperar dados de jogo", "error": f"{e}"}), 400


def get_jogos():
    try:
        jogos = table_jogos.all()
        return jsonify({"status": True, "message": "Success", "data": jogos}), 200
    except Exception as e:
        return jsonify({"status": False, "message": "Erro ao recuperar os dados de jogos", "error": f"{e}"}), 400
