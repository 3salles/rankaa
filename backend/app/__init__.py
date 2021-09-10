from flask import Flask
from flask_pydantic_spec import FlaskPydanticSpec

app = Flask(__name__)
spec = FlaskPydanticSpec('flask', title='App')
spec.register(app)

from app.controllers import default