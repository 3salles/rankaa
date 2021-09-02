from app import app, spec
from itertools import count
from typing import Optional
from flask import request, jsonify
from flask_pydantic_spec import Request, Response
from pydantic import BaseModel, Field
from tinydb import TinyDB, Query


db_users = TinyDB('users.json')
db_atleticas = TinyDB('atleticas.json')
c = count()
d = count()

class User(BaseModel):
    id: Optional[int] = Field(default_factory=lambda:next(c))
    name: str
    email: str
    password: str

class Login(BaseModel):
    email: str
    password: str

class Atletica(BaseModel):
    id: Optional[int] = Field(default_factory=lambda:next(d))
    name: str
    curso: str
    email: str
    instagram: str
    facebook: str
    twitter: str
    number: str

class Atleticas(BaseModel):
    atleticas: list[Atletica]

#HOME - Página inicial (GET)
@app.get('/')
def get_home():
    return jsonify({'mensagem':'HOME'})

#Entrada - Página para acessar Login e Signup (GET)
@app.get('/enter/')
def get_enter():
    return jsonify({'mensagem':'ENTRADA'})

#Signup - Página de cadastro (GET, POST)
@app.get('/enter/signup')
def get_signup():
    return jsonify({'mensagem':'SIGNUP'})

@app.post('/enter/signup/')
@spec.validate(body=Request(User), resp=Response(HTTP_201=User))
def post_signup():
    body = request.context.body.dict()
    if (body['email'] != "") and (body['name'] != "") and (body['password'] != ""):
        aut = db_users.search(Query().email == body['email'])
        if len(aut) == 0:
            db_users.insert(body)
            return jsonify({'mensagem':'Dados cadastrados'})
        else:
            return jsonify({'mensagem':'Email inválido'})
    else:
        return  jsonify({'mensagem':'Dados incompletos'})

#Login - Página para o login (GET, POST)
@app.get('/enter/login/')
def get_login():
    return jsonify({'mensagem':'LOGIN'})

@app.post('/enter/login/')
@spec.validate(body=Request(Login), resp=Response(HTTP_201=Login))
def post_login():
    body = request.context.body.dict()
    if (body['email'] != "") and (body['password'] != ""):
        aut = db_users.search(Query().email == body['email'])
        if len(aut) > 0 and aut[0]['password'] == body['password']:
            return jsonify({'mensagem':'Direcionar a pagina do organizador...'})
        else:
            return jsonify({'mensagem':'Email incompleto'})
    else:
        return  jsonify({'mensagem':'Dados incompletos'})

#Organização - Página após o login (GET, POST, DELETE)
@app.get('/organizacao/')
def get_organizacao():
    return jsonify({'messagem':'PAGINA ORGANIZADOR'})

#Cadastrar Nova Atlética - Página de cadastro de nova atlética
@app.get('/organizacao/novatletica')
def get_newatletica():
    return jsonify(db_atleticas.all())

@app.post('/organizacao/novatletica/')
@spec.validate(body=Request(Atletica), resp=Response(HTTP_201=Atletica))
def post_newatletica():
    body = request.context.body.dict()
    if (body['name'] != "") and (body['curso'] != ""):
        aut = db_atleticas.search(Query().name == body['name'])
        if len(aut) == 0:
            db_atleticas.insert(body)
            return jsonify({'mensagem':'Atlética cadastrada'})
        else:
            return jsonify({'mensagem':'Nome ja pertence a uma atlética'})
    else:
         return  jsonify({'mensagem':'Dados incompletos'})       

@app.delete('/organizacao/novatletica/<int:id>')
@spec.validate(resp=Response('HTTP_204'))
def deletar_pessoa(id):
    db_atleticas.remove(Query().id == id)
    return jsonify({})