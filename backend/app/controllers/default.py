

"""from app import app
from flask import json, render_template, request, redirect, jsonify
import sqlite3

app.secret_key = 'mykey'

#Home - a pagina inicial da API
@app.route('/')
def home():
    return 'HOME'

#Entrada - Página acessando a Organização (Signup/Login)
def entrada():
    #Rota de 
    return 'ENTRADA'

#SigUp - Cadastro de um novo organizador
@app.route('/entrada/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        dados = request.json
        name = dados['name']
        email = dados['email']
        password = dados['password']
        if (name != '') or (email != '') or (password != ''):
            conn = sqlite3.connect("database.db")
            c = conn.cursor()
            c.execute("INSERT INTO users VALUES('"+email+"','"+password+"', '"+name+"')")
            conn.commit()
            conn.close()
            return jsonify({'mensagem':'Dados enviados'})
        else:
            return jsonify({'mensagem':'Dados não enviados'})
    else:
        return 'SIGNUP'

#Login - Login de um usuário ja cadastrado
@app.route('/entrada/login', methods = ['GET', 'POST'])
def login():
    r = None
    if request.method == 'POST':
        dados = request.json
        email = dados['email']
        password = dados['password']
        if (email != "") or (password != ""):
            conn = sqlite3.connect("database.db")
            c = conn.cursor()
            c.execute("SELECT * FROM users WHERE email = '"+email+"' and password = '"+password+"'")
            r = c.fetchall()
            for i in r:
                if email == i[0] and password == i[1]:
                    return jsonify ({'caminho': 'http://127.0.0.1:5000/organizacao'})
            return jsonify({'mensagem':'Username ou password incorretos'})
        else:
            return jsonify({'mensagem':'Dados não enviados'})
    else:
        return 'LOGIN'

#Organização - Pagina inicial da organização
@app.route('/organizacao')
def organizacao():
    return 'ORGANIZAÇÃO'

@app.route('/organizacao/newatletica', methods = ['GET', 'POST'])
def new_atletica():
    if request.method == 'POST':
        dados = request.json
        nome_atletica = dados['nome_atletica']
        curso = dados['curso']
        email = dados['email']
        facebook = dados['facebook']
        instagram = dados['instagram']
        twitter = dados['twitter']
        if (nome_atletica == "") or (curso == ""):
            return jsonify({"mensagem":"dados incompletos"})
        else:
            conn = sqlite3.connect("database.db")
            c = conn.cursor()
            c.execute("INSERT INTO atleticas VALUES('"+nome_atletica+"','"+curso+"', '"+email+"', '"+facebook+"', '"+instagram+"', '"+twitter+"')")
            conn.commit()
            conn.close()
            return jsonify(dados)
    else:
        return 'NOVA ATLETICA'"""