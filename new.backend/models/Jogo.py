from pydantic import BaseModel, Field
from typing import Optional
from itertools import count
from datetime import datetime

id_count = count()

class Jogo(BaseModel):
    id: Optional[int] = Field(default_factory=lambda:next(id_count))
    modalidade: str
    time1: int
    time2: int
    placar1: Optional[int] = 0
    placar2: Optional[int] = 0
    finalizado: Optional[bool] = False
    cancelado: Optional[bool] = False
    wo_id: Optional[int] = None  
    local: str
    data: Optional[datetime] = None
    has_edited: Optional[bool] = False
    edited_at: Optional[datetime] = None
    edited_by: Optional[int] = None
    created_at: Optional[datetime] = datetime.now()
