from pydantic import BaseModel, Field
from typing import Optional
from itertools import count
from datetime import datetime

id_count = count()

class Atletica(BaseModel):
    id: Optional[int] = Field(default_factory=lambda:next(id_count))
    nome: str
    curso: str
    icon: str
    email: str
    instagram: str
    facebook: str
    twitter: str
    created_at: Optional[datetime] = datetime.now()