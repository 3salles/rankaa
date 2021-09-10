from tinydb import TinyDB
from tinydb.storages import JSONStorage
from tinydb_serialization import SerializationMiddleware
from tinydb_serialization.serializers import DateTimeSerializer

serialization = SerializationMiddleware(JSONStorage)
serialization.register_serializer(DateTimeSerializer(), 'TinyDate')

database = TinyDB("database/rankaa_database.json", storage=serialization)
usuarios = database.table("usuarios")
jogos = database.table("jogos")
atleticas = database.table("atleticas")
modalidades = database.table("modalidades")
