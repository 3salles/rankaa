from app.fuctions.jogos import proximos_jogos, ultimos_jogos, proximos_jogos_modalidade, ultimos_jogos_modalidade, proximos_jogos_atletica, ultimos_jogos_atletica
from app import app, spec
from app.dataset.classes import User, Login, Atletica, Jogo
from flask import request, jsonify
from flask_pydantic_spec import Request, Response
from tinydb.queries import where
from tinydb import TinyDB, Query


db_users = TinyDB(r"app\dataset\users.json")
db_atleticas = TinyDB(r"app\dataset\atleticas.json")
db_jogos = TinyDB(r"app\dataset\jogos.json")
db_modalidades = TinyDB(r"app\dataset\modalidades.json")


#HOME - Página inicial (GET)
@app.get('/')
def get_home():
    aut1 = proximos_jogos(db_jogos)
    aut2 = ultimos_jogos(db_jogos)
    return jsonify({'Proximos jogos':aut1[0:3], 'Últimos jogos':aut2[-1:-4:-1]})

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
            return jsonify(db_atleticas.all())
        else:
            return jsonify({'mensagem':'Nome ja pertence a uma atlética'}, db_atleticas.all())
    else:
         return  jsonify({'mensagem':'Dados incompletos'}, db_atleticas.all())       

@app.delete('/organizacao/novatletica/<int:id>')
@spec.validate(resp=Response('HTTP_204'))
def deletar_newatletica(id):
    db_atleticas.remove(Query().id == id)
    return jsonify(db_atleticas.all())

#Cadastrar Novo Jogo
@app.get('/organizacao/novojogo/')
def get_newgame():
    return jsonify(db_jogos.all()[::-1])

@app.post('/organizacao/novojogo/')
@spec.validate(body=Request(Jogo), resp=Response(HTTP_201=Jogo))
def post_newgame():
    body = request.context.body.dict()
    if (body['modalidade'] != "") and (body['time1'] != "") and (body['time2'] != ""):
        aut1 = db_atleticas.search(Query().name == body['time1'])
        aut2 = db_atleticas.search(Query().name == body['time2'])
        if len(aut1) > 0 and len(aut2) > 0:
            db_jogos.insert(body)
            return jsonify(db_jogos.all()[::-1])
        else:
            return jsonify({'mensagem':'Atlética não existente'}, db_jogos.all()[::-1])
    else:
        return jsonify({'mensagem':'Dados incompletos'}, db_jogos.all()[::-1])

@app.delete('/organizacao/novojogo/<int:id>')
@spec.validate(resp=Response('HTTP_204'))
def deletar_newgame(id):
    db_jogos.remove(Query().id == id)
    return jsonify(db_jogos.all()[::-1])

@app.put('/organizacao/novojogo/<int:id><int:placar1><int:placar2>')
@spec.validate(resp=Response(HTTP_201=Jogo))
def put_newgame(id, placar1, placar2):
    db_jogos.update({'placar1':placar1}, where('id') == id)
    db_jogos.update({'placar2':placar2}, where('id') == id)
    db_jogos.update({'finalizado':1}, where('id') == id)
    return jsonify(db_jogos.all()[::-1])

#Atléticas - Página das atléticas
@app.get('/atleticas/<int:id>')
def get_atleticas(id):
    q = Query()
    aut1 = db_atleticas.search(Query().id == id)
    aut2 = proximos_jogos_atletica(db_jogos, id)
    aut3 = ultimos_jogos_atletica(db_jogos, id)
    return jsonify({aut1[0]['name']:aut1}, {'Proximos jogos':aut2[-1:-4:-1]}, {'Ultimos jogos':aut3[-1:-4:-1]})

#Modalidade - Pagina das modalidades
@app.get('/modalidade/<int:id>')
def get_modalidades(id):
    q = Query()
    aut1 = db_modalidades.search(Query().id == id)
    aut2 = proximos_jogos_modalidade(db_jogos, id)
    aut3 = ultimos_jogos_modalidade(db_jogos, id)
    return jsonify({aut1[0]["name"]:aut1}, {'Proximos jogos':aut2}, {'Ultimos jogos':aut3})