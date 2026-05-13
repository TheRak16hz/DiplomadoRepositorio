# ==========================================================
# 1. PILAR: ABSTRACCIÓN
# Importamos la base para crear clases que son solo "conceptos"
# ==========================================================
from abc import ABC, abstractmethod

class Prenda(ABC):
    def __init__(self, nombre, precio_venta):
        self.nombre = nombre
        self.precio_venta = precio_venta
        # --------------------------------------------------
        # 2. PILAR: ENCAPSULAMIENTO
        # El precio de costo es secreto de la tienda (__).
        # Evitamos que los clientes vean cuánto nos costó fabricarlo.
        # --------------------------------------------------
        self.__precio_costo = precio_venta * 0.40 # El costo es el 40% del PVP

    # Método para consultar el precio de venta (Público)
    def obtener_precio(self):
        return self.precio_venta

    # Contrato: Toda prenda debe decir cómo se debe lavar
    @abstractmethod
    def instrucciones_lavado(self):
        pass

# ==========================================================
# 3. PILAR: HERENCIA
# 'Pantalon' y 'Blusa' heredan las características de 'Prenda'
# ==========================================================

class Pantalon(Prenda):
    def __init__(self, nombre, precio_venta, talla, tipo_corte):
        # Usamos super() para inicializar el nombre y precio en el Padre
        super().__init__(nombre, precio_venta)
        self.talla = talla
        self.tipo_corte = tipo_corte # Ejemplo: Slim, Recto, etc.

    # Implementamos el contrato (Polimorfismo)
    def instrucciones_lavado(self):
        return f"Pantalón {self.nombre}: Lavar con agua fría y no usar secadora para mantener el corte {self.tipo_corte}."

class Blusa(Prenda):
    def __init__(self, nombre, precio_venta, tela):
        super().__init__(nombre, precio_venta)
        self.tela = tela # Ejemplo: Seda, Algodón, etc.

    # Implementamos el contrato de forma distinta (Polimorfismo)
    def instrucciones_lavado(self):
        return f"Blusa {self.nombre}: Prenda de {self.tela}. Lavar a mano únicamente."

# ==========================================================
# 4. PILAR: POLIMORFISMO
# Función que imprime las etiquetas de cualquier prenda
# ==========================================================

def imprimir_etiqueta(prenda):
    # La función recibe 'prenda' y no sabe si es pantalón o blusa.
    # Simplemente confía en que tiene los métodos del padre.
    print(f"--- ETIQUETA DE PRODUCTO ---")
    print(f"Artículo: {prenda.nombre}")
    print(f"Precio: ${prenda.obtener_precio()}")
    print(f"Cuidado: {prenda.instrucciones_lavado()}")
    print("----------------------------\n")

# --- SIMULACIÓN DE LA TIENDA ---

# Creamos los objetos (Instanciación)
jean_azul = Pantalon("Jean Clásico", 45.0, 32, "Slim Fit")
top_seda = Blusa("Blusa Elegante", 30.0, "Seda Natural")

# Creamos una lista de inventario
inventario = [jean_azul, top_seda]

# Aplicamos el Polimorfismo recorriendo la lista
for articulo in inventario:
    imprimir_etiqueta(articulo)