#importar las librerias necesarias de fastapi y sqlalchemy
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware #importar CORS para majear varias rutas
from sqlalchemy.orm import Session
from typing import List
from models import Pelicula, PeliculaCreate, PeliculaResponse, Comentario, ComentarioCreate, ComentarioResponse, SessionLocal, Base, engine

#crear todas las tablas en la base de datos usando los modelos definidos
Base.metadata.create_all(bind=engine)

#inicializar la aplicacion FastAPI
app = FastAPI()

# configuracion del middleware de CORS para permitir solicitudes desde diferentes origenes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #permitir todos los origenes
    allow_credentials=True,
    allow_methods=["*"], #permitir todos los metodos HTTP (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"], #permitir todos los headers
)

#funcion para obtener una sesion de base de datos
def get_db():
    db = SessionLocal() #crear una nueva sesion de base de datos
    try:
        yield db #devolver la sesion para su uso en las rutas
    finally:
        db.close() #cerrar la sesion despues de su uso

#endpoint para prueba de ruta raiz
@app.get("/")
def read_root():
    return {"Academia": "Ingenieria Digital"}


#endpoint para crear una nueva pelicula
@app.post("/peliculas/", response_model=PeliculaResponse)
def crear_pelicula(pelicula: PeliculaCreate, db: Session = Depends(get_db)):
    db_pelicula = Pelicula(**pelicula.dict()) #crear un nuevo objeto pelicula
    db.add(db_pelicula) #agregar la pelicula a la sesion de base de datos
    db.commit() #confirmar los cambios en la BD
    db.refresh(db_pelicula) #refrescar el objeto pelicula para obtener el ID generado
    return db_pelicula #devolver la pelicula creada al cliente

#endpoint para obtener todas las peliculas
@app.get("/peliculas/", response_model=List[PeliculaResponse])
def obtener_peliculas(db: Session = Depends(get_db)):
    peliculas = db.query(Pelicula).order_by(Pelicula.id).all() #consultar todas las peliculas en la BD
    return peliculas #devolver la lista de peliculas al cliente

@app.get("/peliculas/{pelicula_id}", response_model=PeliculaResponse)
def leer_pelicula(pelicula_id: int, db: Session = Depends(get_db)):
    pelicula = db.query(Pelicula).filter(Pelicula.id == pelicula_id).first() #consultar la pelicula por ID
    if pelicula is None:
        raise HTTPException(status_code=404, detail="Pelicula no encontrada") #si no se encuentra, devolver error 404
    return pelicula #devolver la pelicula encontrada al cliente

@app.put("/peliculas/{pelicula_id}", response_model=PeliculaResponse)
def actualizar_pelicula(pelicula_id: int, pelicula: PeliculaCreate, db: Session = Depends(get_db)):
    db_pelicula = db.query(Pelicula).filter(Pelicula.id == pelicula_id).first() #consultar la pelicula por ID
    if db_pelicula is None:
        raise HTTPException(status_code=404, detail="Pelicula no encontrada") #si no se encuentra, devolver error 404
    db_pelicula.titulo = pelicula.titulo #actualizar el titulo de la pelicula
    db_pelicula.director = pelicula.director #actualizar el director de la pelicula
    db_pelicula.anio = pelicula.anio #actualizar el año de lanzamiento de
    
    db.commit() #confirmar los cambios en la BD
    return db_pelicula #devolver la pelicula actualizada al cliente

#endpoint para eliminar una pelicula por id
@app.delete("/peliculas/{pelicula_id}")
def eliminar_pelicula(pelicula_id: int, db: Session = Depends(get_db)):
    db_pelicula = db.query(Pelicula).filter(Pelicula.id == pelicula_id).first() #consultar la pelicula por ID
    if db_pelicula is None:
        raise HTTPException(status_code=404, detail="Pelicula no encontrada") #si no se encuentra, devolver error 404
    db.delete(db_pelicula) #eliminar la pelicula de la BD
    db.commit() #confirmar los cambios en la BD
    return {"detail": "Pelicula eliminada correctamente"} #devolver mensaje de confirmacion al cliente

###############################endpoints para comentarios##########################

#crear comentarios
@app.post("/comentarios/", response_model=ComentarioResponse)
def crear_comentario(comentario: ComentarioCreate, db: Session = Depends(get_db)):
    #verificar si la pelicula existe
    db_pelicula = db.query(Pelicula).filter(Pelicula.id == comentario.pelicula_id).first()
    if db_pelicula is None:
        raise HTTPException(status_code=404, detail="Pelicula no encontrada")
    #Crear el nuevo comentario
    db_comentario = Comentario(**comentario.dict())
    db.add(db_comentario)
    db.commit()
    db.refresh(db_comentario)
    return db_comentario

#obtener todos los comentarios de 1 pelicula en especifico
@app.get("/peliculas/{pelicula_id}/comentarios", response_model = List[ComentarioResponse])
def leer_comentarios(pelicula_id: int, db: Session = Depends(get_db)):
    #buscar la pelicula
    db_pelicula = db.query(Pelicula).filter(Pelicula.id == pelicula_id).first()
    if db_pelicula is None:
        raise HTTPException(status_code=404, detail="pelicula no encontrada")

    #obtener todos los comentarios
    return db_pelicula.comentarios #devolver la lista de comentarios

#obtener todos los comentarios
@app.get("/comentarios/", response_model=List[ComentarioResponse])
def leer_comentarios_all(db: Session = Depends(get_db)):
    #Obtener todos los comentarios de todas las peliculas
    comentarios = db.query(Comentario).all()
    return comentarios # devolver la lista de todos los comentarios

#actualizar un comentario existente
@app.put("/comentarios/{comentario_id}", response_model=ComentarioResponse)
def actualizar_comentarios(comentario_id: int, comentario: ComentarioCreate, db: Session = Depends(get_db)):
    #buscar el comentario
    db_comentario = db.query(Comentario).filter(Comentario.id == comentario_id).first()
    if db_comentario is None:
        raise HTTPException(status_code=404, detail="Comentario no encontrado")

    #verificar si la pelicula asociada al comentario existe
    db_pelicula = db.query(Pelicula).filter(Pelicula.id == comentario.pelicula_id).first()
    if db_pelicula is None:
        raise HTTPException(status_code=404, detail="Pelicula no encontrado")
    
    #actualizar el contenido del comentarioy el ID de la pelicula
    db_comentario.contenido = comentario.contenido
    db_comentario.pelicula_id = comentario.pelicula_id # si se necesita actualizar la pelicula asociada
    
    db.commit() #confirmamos los cambios en la base de datos
    db.refresh(db_comentario) #obtener el comentario actualizado
    return db_comentario #Devolver el comentario actualizado

@app.delete("/comentarios/{comentario_id}", response_model=dict)
def eliminar_comentario(comentario_id: int, db: Session = Depends(get_db)):
    #buscar el comentario
    db_comentario = db.query(Comentario).filter(Comentario.id == comentario_id).first()
    if db_comentario is None:
        raise HTTPException(status_code=404, detail="Comentario no encontrado")
    
    db.delete(db_comentario) #elimina el comentario
    db.commit()#confirma los cambios
    return {"detail": "Comentario eliminado"} #mensaje de exito