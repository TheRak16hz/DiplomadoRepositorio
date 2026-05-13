#importa la clase FastAPI del módulo fastapi
from fastapi import FastAPI

# crea una instancia de la aplicacion FastAPI
app = FastAPI()

#Define una ruta para el metodo GET en la raiz ("/")
@app.get("/")

def read_root():
    return {"Academia": "Ingenieria Digital"}

@app.get("/items/{item_id}")
#Esta funciom maneja solicitudes GET A "/items/{item_id}"
#'item_id' es un entero y 'q' es una cadena opcional
def read_item(item_id: int, q: str = None):
        return{'item_id': item_id, 'query': q}