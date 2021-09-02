from flask import Flask
from flask_pydantic_spec import FlaskPydanticSpec

server = Flask(__name__)
spec = FlaskPydanticSpec('flask', title='App')
spec.register(server)

from app.controllers import default