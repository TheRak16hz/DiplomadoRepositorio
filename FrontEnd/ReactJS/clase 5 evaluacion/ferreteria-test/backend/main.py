#importar las librerias necesarias de fastapi y sqlalchemy
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware #importar CORS para majear varias rutas
from fastapi.staticfiles import StaticFiles #importar StaticFiles para servir el frontend
from sqlalchemy.orm import Session
from sqlalchemy import text
from typing import List
import os
from models import (
    SessionLocal, Base, engine,
    ProductoCreate, ProductoResponse, VentaCreate, VentaResponse, Producto, Venta
)
#crear todas las tablas en la base de datos usando los modelos definidos
Base.metadata.create_all(bind=engine)

#inicializar la aplicacion FastAPI
app = FastAPI()

# configuracion del middleware de CORS para permitir solicitudes desde diferentes origenes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"], # permitir origenes especificos del frontend
    allow_credentials=True,
    allow_methods=["*"], #permitir todos los metodos HTTP (GET, POST, PUT, DELETE, etc.)F
    allow_headers=["*"], #permitir todos los headers
)

# Montar la carpeta frontEnd como estática
frontend_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontEnd"))
app.mount("/frontend", StaticFiles(directory=frontend_path), name="frontend")

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
    return {"ferreteria" : "abierto ahora"}

#=======================
#Endpoints para producto
#=======================

#POST
@app.post("/productos/", response_model=ProductoResponse)
def crear_producto(producto: ProductoCreate, db: Session = Depends(get_db)):
    db_producto = Producto(**producto.dict())
    db.add(db_producto)
    db.commit()
    db.refresh(db_producto)
    return db_producto

#GET
@app.get("/productos/", response_model=List[ProductoResponse])
def obtener_productos(db: Session = Depends(get_db)):
    productos = db.query(Producto).order_by(Producto.id_producto).all()
    return productos

#GET:ID
@app.get("/productos/{producto_id}", response_model=ProductoResponse)
def leer_producto(producto_id: int, db: Session = Depends(get_db)):
    producto = db.query(Producto).filter(Producto.id_producto == producto_id).first()
    if producto is None:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return producto

#PUT
@app.put("/productos/{producto_id}", response_model=ProductoResponse)
def actualizar_producto(producto_id: int, producto: ProductoCreate, db: Session = Depends(get_db)):
    db_producto = db.query(Producto).filter(Producto.id_producto == producto_id).first()
    if db_producto is None:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    db_producto.nombre = producto.nombre
    db_producto.categoria = producto.categoria
    db_producto.precio = producto.precio
    db_producto.stock = producto.stock
    db_producto.status = producto.status
    db.commit()
    db.refresh(db_producto)
    return db_producto

#DELETE LOGICO
@app.put("/productos/{producto_id}/eliminar", response_model=ProductoResponse)
def eliminar_producto(producto_id: int, db: Session = Depends(get_db)):
    db_producto = db.query(Producto).filter(Producto.id_producto == producto_id).first()
    if db_producto is None:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    db_producto.status = 'I'
    db.commit()
    db.refresh(db_producto)
    return db_producto

#=======================
#Endpoints para producto
#=======================

#POST
@app.post("/ventas/", response_model=VentaResponse)
def crear_venta(venta: VentaCreate, db: Session = Depends(get_db)):
    
    #busqueda de producto en stock y descuenta la cantidad de unidades vendidas
    db_producto = db.query(Producto).filter(Producto.id_producto == venta.id_producto).first()
    if not db_producto:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    if db_producto.stock < venta.cantidad_vendida:
        raise HTTPException(status_code=400, detail="Stock insuficiente para realizar la venta")

    db_producto.stock -= venta.cantidad_vendida
    venta.total_pago = db_producto.precio * venta.cantidad_vendida
    
    db_venta = Venta(**venta.dict())
    db.add(db_venta)
    db.commit()
    db.refresh(db_venta)
    return db_venta

#GET
@app.get("/ventas/", response_model=List[VentaResponse])
def obtener_ventas(db: Session = Depends(get_db)):
    ventas = db.query(Venta).order_by(Venta.id_venta).all()
    return ventas

#GET:ID
@app.get("/ventas/{venta_id}", response_model=VentaResponse)
def leer_venta(venta_id: int, db: Session = Depends(get_db)):
    venta = db.query(Venta).filter(Venta.id_venta == venta_id).first()
    if venta is None:
        raise HTTPException(status_code=404, detail="Venta no encontrada")
    return venta

#PUT
@app.put("/ventas/{venta_id}", response_model=VentaResponse)
def actualizar_venta(venta_id: int, venta: VentaCreate, db: Session = Depends(get_db)):
    db_venta = db.query(Venta).filter(Venta.id_venta == venta_id).first()
    if db_venta is None:
        raise HTTPException(status_code=404, detail="Venta no encontrada")
    
    # Busqueda de producto para recalcular el precio total
    db_producto = db.query(Producto).filter(Producto.id_producto == venta.id_producto).first()
    if not db_producto:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
        
    db_venta.id_producto = venta.id_producto
    db_venta.cantidad_vendida = venta.cantidad_vendida
    db_venta.fecha_venta = venta.fecha_venta
    db_venta.status = venta.status
    db_venta.total_pago = db_producto.precio * venta.cantidad_vendida
    
    db.commit()
    db.refresh(db_venta)
    return db_venta

# DELETE Lógico para Ventas (Anular y devolver stock)
@app.put("/ventas/{venta_id}/eliminar", response_model=VentaResponse)
def eliminar_venta(venta_id: int, db: Session = Depends(get_db)):
    db_venta = db.query(Venta).filter(Venta.id_venta == venta_id).first()
    if db_venta is None:
        raise HTTPException(status_code=404, detail="Venta no encontrada")
    
    # Verificamos que la venta no esté ya anulada para evitar duplicar el stock
    if db_venta.status != 'I':
        # 1. Buscamos el producto
        db_producto = db.query(Producto).filter(Producto.id_producto == db_venta.id_producto).first()
        
        # 2. Le devolvemos el stock al producto
        if db_producto:
            db_producto.stock += db_venta.cantidad_vendida
            
        # 3. Anulamos la venta
        db_venta.status = 'I'
        
        db.commit()
        db.refresh(db_venta)
        
    return db_venta