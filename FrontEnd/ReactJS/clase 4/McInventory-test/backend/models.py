from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, CHAR, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from pydantic import BaseModel, Field
from typing import Optional

# URL de conexion de la base de datos de PostgreSQL
# Usaremos 'postgres' como base para asegurar la conexion, o una base especifica si existe
DATABASE_URL = "postgresql://postgres:1234@localhost:5432/mcinventory"

# Crear el motor de la base de datos
engine = create_engine(DATABASE_URL)

# crear una clase de sesion local para manejar las transacciones
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# declarar la clase base para los modelos SQLAlchemy
Base = declarative_base()

# ==========================================
# MODELOS SQLALCHEMY
# ==========================================

class FoodType(Base):
    __tablename__ = "food_types"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True) # Vegetales, Carnicos, etc.
    description = Column(String, nullable=True)

    items = relationship("InventoryItem", back_populates="food_type")

class InventoryItem(Base):
    __tablename__ = "inventory_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    quantity = Column(Float, default=0.0)
    unit = Column(String) # kg, unidades, etc.
    price = Column(Float, nullable=True)
    type_id = Column(Integer, ForeignKey("food_types.id"))

    food_type = relationship("FoodType", back_populates="items")

# ==========================================
# ESQUEMAS PYDANTIC
# ==========================================

class FoodTypeBase(BaseModel):
    name: str
    description: Optional[str] = None

class FoodTypeCreate(FoodTypeBase):
    pass

class FoodTypeResponse(FoodTypeBase):
    id: int
    class Config:
        orm_mode = True

class InventoryItemBase(BaseModel):
    name: str
    quantity: float
    unit: str
    price: Optional[float] = None
    type_id: int

class InventoryItemCreate(InventoryItemBase):
    pass

class InventoryItemResponse(InventoryItemBase):
    id: int
    class Config:
        orm_mode = True
