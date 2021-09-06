from pydantic import BaseModel, Field
from typing import Optional
from itertools import count

c = count()
d = count()
e = count()

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
    icon: str
    email: str
    instagram: str
    facebook: str
    twitter: str

class Atleticas(BaseModel):
    atleticas: list[Atletica]

class Jogo(BaseModel):
    id: Optional[int] = Field(default_factory=lambda:next(e))
    modalidade: str
    time1: str
    placar1: Optional[int] = 0
    placar2: Optional[int] = 0
    finalizado: Optional[int] = 0
    time2: str
    local: str
    day: int
    month: int
    hour: int
    minutes: int