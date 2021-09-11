from flask import Flask
from routes import usuario
from routes import modalidade
from routes import jogo
from routes import atletica
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
usuario.instala_rota(app)
modalidade.instala_rota(app)
jogo.instala_rota(app)
atletica.instala_rota(app)