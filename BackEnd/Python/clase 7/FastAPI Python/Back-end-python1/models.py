#import las librerias necesarias de SQLAlchemy y Pydantic
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey #añadimos ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship # y relationship
from pydantic import BaseModel

#URL de conexion de la base de datos de PostgreSQL
DATABASE_URL = "postgresql://postgres:1234@localhost:5432/api_python"

#Crear el motor de la base de datos
engine = create_engine(DATABASE_URL)

#crear una clase de sesion local para manejar las transacciones
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

#declarar la clase base para los modelos SQLAlchemy
Base = declarative_base()

#definicion del modelo de datos 'Pelicula'
class Pelicula(Base):
    __tablename__ = "peliculas"

    id = Column(Integer, primary_key=True, index=True) # ID de la pelicula (clave primaria)
    titulo = Column(String, index=True) # Titulo de la pelicula
    director = Column(String, index=True) # Director de la pelicula
    anio = Column(Integer, index=True) # Año de lanzamiento de la pelicula
    #status = Column(String, index=True) # Estado de la pelicula

    comentarios = relationship("Comentario", back_populates="pelicula") # nuevo

class Comentario(Base):
    __tablename__ = "comentarios" #nombre de la base de datos
    
    id = Column(Integer, primary_key=True, index=True) #ID del comentario
    contenido = Column(String) # contenido del comentario
    pelicula_id = Column(Integer, ForeignKey("peliculas.id")) #clave foranea que hace referencia a la pelicula
    
    #relacion inversa a Pelicula
    pelicula = relationship("Pelicula", back_populates="comentarios")
    

#Modelo Pydantic para la creacion de una nueva pelicula
class PeliculaCreate(BaseModel):
    titulo: str #titulo de la pelicula
    director: str #director de la pelicula
    anio: int #apo de lanzamiento de la pelicula
    #status: str

#modelo Pydantic para la respuesta al cliente, incluyendo el ID
class PeliculaResponse(PeliculaCreate):
    id: int #ID de la pelicula (será generado por la BD)
    
    class Config:
        orm_mode = True #Permite que pydantic trabaje con modelos de SQLAlchemy

#modelo para la creacion de un comentario
class ComentarioCreate(BaseModel):
    contenido: str
    pelicula_id: int

#modelo de respuesta para comentario
class ComentarioResponse(ComentarioCreate):
    id: int
    class Config:
        orm_mode = True #permite que pydantic trabaje con modelos de SQLAlchemy