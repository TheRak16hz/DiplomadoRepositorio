from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import models

# Crear las tablas en la base de datos
models.Base.metadata.create_all(bind=models.engine)

app = FastAPI(title="McDonald's Inventory API")

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependencia para obtener la sesión de la base de datos
def get_db():
    db = models.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to McDonald's Inventory API"}

# ==========================================
# ENDPOINTS PARA TIPOS DE ALIMENTO
# ==========================================

@app.post("/food-types/", response_model=models.FoodTypeResponse)
def create_food_type(food_type: models.FoodTypeCreate, db: Session = Depends(get_db)):
    db_food_type = models.FoodType(**food_type.dict())
    db.add(db_food_type)
    db.commit()
    db.refresh(db_food_type)
    return db_food_type

@app.get("/food-types/", response_model=List[models.FoodTypeResponse])
def list_food_types(db: Session = Depends(get_db)):
    return db.query(models.FoodType).all()

# ==========================================
# ENDPOINTS PARA INVENTARIO
# ==========================================

@app.post("/items/", response_model=models.InventoryItemResponse)
def create_item(item: models.InventoryItemCreate, db: Session = Depends(get_db)):
    db_item = models.InventoryItem(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

@app.get("/items/", response_model=List[models.InventoryItemResponse])
def list_items(db: Session = Depends(get_db)):
    return db.query(models.InventoryItem).all()

@app.get("/items/{item_id}", response_model=models.InventoryItemResponse)
def get_item(item_id: int, db: Session = Depends(get_db)):
    item = db.query(models.InventoryItem).filter(models.InventoryItem.id == item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@app.put("/items/{item_id}", response_model=models.InventoryItemResponse)
def update_item(item_id: int, item_data: models.InventoryItemCreate, db: Session = Depends(get_db)):
    db_item = db.query(models.InventoryItem).filter(models.InventoryItem.id == item_id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    for key, value in item_data.dict().items():
        setattr(db_item, key, value)
    
    db.commit()
    db.refresh(db_item)
    return db_item

@app.delete("/items/{item_id}")
def delete_item(item_id: int, db: Session = Depends(get_db)):
    db_item = db.query(models.InventoryItem).filter(models.InventoryItem.id == item_id).first()
    if not db_item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    db.delete(db_item)
    db.commit()
    return {"message": "Item deleted"}
