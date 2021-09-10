from datetime import time
from tinydb import TinyDB, Query

def ordenar_por_data(dataset):
    a =  list(dataset.all())
    count = len(a)
    b = []
    while count > 0:
        menor = a[0]
        menor_mes = menor['month']
        menor_dia = menor['day']
        for i in a:
            if i['month'] < menor_mes:
                menor = i
                menor_mes = menor['month']
                menor_dia = menor['day']
            elif i['month'] == menor_mes and i['day'] == menor_dia:
                menor = i
                menor_mes = menor['month']
                menor_dia = menor['day']
        b.append(menor)
        a.remove(menor)
        count = count - 1
    return b

def proximos_jogos(dataset):
    a = ordenar_por_data(dataset)
    b = []
    for i in a:
        if i['finalizado'] == 0:
            b.append(i)
    return b

def ultimos_jogos(dataset):
    a = ordenar_por_data(dataset)
    b = []
    for i in a:
        if i['finalizado'] == 1:
            b.append(i)
    return b

def proximos_jogos_modalidade(dataset, modalidade):
    db_modalidade = TinyDB(r"app\dataset\modalidades.json")
    aut = db_modalidade.search(Query().id == modalidade)
    a = ordenar_por_data(dataset)
    b = []
    for i in a:
        if (i['finalizado'] == 0) and (i['modalidade'] == aut[0]['name']):
            b.append(i)
    return b

def ultimos_jogos_modalidade(dataset, modalidade):
    db_modalidade = TinyDB(r"app\dataset\modalidades.json")
    aut = db_modalidade.search(Query().id == modalidade)
    a = ordenar_por_data(dataset)
    b = []
    for i in a:
        if (i['finalizado'] == 1) and (i['modalidade'] == aut[0]['name']):
            b.append(i)
    return b

def proximos_jogos_atletica(dataset, atletica):
    db_atletica = TinyDB(r"app\dataset\atleticas.json")
    aut = db_atletica.search(Query().id == atletica)
    a = ordenar_por_data(dataset)
    b = []
    for i in a:
        if (i['time1'] == aut[0]['name']) or (i['time2'] == aut[0]['name']):
            if i['finalizado'] == 0:
                b.append(i)
    return b

def ultimos_jogos_atletica(dataset, atletica):
    db_atletica = TinyDB(r"app\dataset\atleticas.json")
    aut = db_atletica.search(Query().id == atletica)
    a = ordenar_por_data(dataset)
    b = []
    for i in a:
        if (i['time1'] == aut[0]['name']) or (i['time2'] == aut[0]['name']):
            if i['finalizado'] == 1:
                b.append(i)
    return b