from pydantic import BaseModel, Field
from typing import Optional
from itertools import count
from datetime import datetime

id_count = count()

class Modalidade(BaseModel):
    id: Optional[int] = Field(default_factory=lambda: next(id_count))
    nome: str
    icone: str
