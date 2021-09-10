from flask import Flask
from routes import usuario
from routes import modalidade
from routes import jogo
from routes import atletica

app = Flask(__name__)
usuario.instala_rota(app)
modalidade.instala_rota(app)
jogo.instala_rota(app)
atletica.instala_rota(app)