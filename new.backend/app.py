from flask import Flask
from routes import usuario
from routes import modalidade

app = Flask(__name__)
usuario.instala_rota(app)
modalidade.instala_rota(app)