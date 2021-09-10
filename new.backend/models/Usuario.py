from pydantic import BaseModel, Field
from typing import Optional
from itertools import count
from datetime import datetime

id_count = count()

class Usuario(BaseModel):
    id: Optional[int] = Field(default_factory=lambda:next(id_count))
    nome: str
    email: str
    password: str
    created_at: Optional[datetime] = datetime.now()