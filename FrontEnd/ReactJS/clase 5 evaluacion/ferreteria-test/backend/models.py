from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, CHAR, DOUBLE, DateTime # Agregado DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from pydantic import BaseModel, Field, ConfigDict
# from datetime import datetime
from typing import Optional
from datetime import datetime # <- Necesitamos importar datetime
from sqlalchemy import DateTime # <- Necesitamos importar DateTime para SQLAlchemy

DATABASE_URL = "postgresql://postgres:1234@localhost:5432/ferreteria"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

##########################################################################################

class Producto(Base):
    __tablename__ = "productos"
    id_producto = Column(Integer, primary_key=True, index=True)
    nombre = Column(String)
    categoria = Column(String)
    precio = Column(DOUBLE)
    stock = Column(Integer)
    status = Column(CHAR)
    
    ventas = relationship("Venta", back_populates="producto")


class Venta(Base):
    __tablename__ = "ventas"
    id_venta = Column(Integer, primary_key=True, index=True)
    id_producto = Column(Integer, ForeignKey("productos.id_producto"))
    cantidad_vendida = Column(Integer)
    
    # Cambiamos String/CHAR por DateTime para que coincida con el 'timestamp' de tu SQL
    fecha_venta = Column(DateTime) 
    
    total_pago = Column(DOUBLE)
    status = Column(CHAR, nullable=True) # nullable=True permite que acepte los NULL de tu BD
    

    producto = relationship("Producto", back_populates="ventas")

# ==========================
# Modelos de Pydantic
# ==========================

class ProductoCreate(BaseModel):
    nombre: str
    categoria: str
    precio: float
    stock: int
    status: str = Field(max_length=1)

class ProductoResponse(ProductoCreate):
    id_producto: int
    
    model_config = ConfigDict(from_attributes=True)

# --- 2. MODELOS PYDANTIC ---
class VentaCreate(BaseModel):
    id_producto: int
    cantidad_vendida: int
    
    # Cambiamos str por datetime para que acepte el timestamp
    fecha_venta: datetime 
    
    total_pago: float = 0.0
    
    # Usamos Optional para que no explote con la venta #1 que tiene el status vacío
    status: Optional[str] = "A" 

class VentaResponse(VentaCreate):
    id_venta: int
    
    class Config:
        orm_mode = True
