# ==========================================================
# 1. PILAR: ABSTRACCIÓN
# Importamos las herramientas para crear "moldes" (clases abstractas)
# ==========================================================
from abc import ABC, abstractmethod

# Definimos 'MaterialBiblioteca' como una clase abstracta.
# No existe tal cosa como un "material" genérico, siempre es un libro o revista.
class MaterialBiblioteca(ABC):
    def __init__(self, titulo, codigo):
        self.titulo = titulo
        self.codigo = codigo
        # --------------------------------------------------
        # 2. PILAR: ENCAPSULAMIENTO
        # Usamos '__' para que el estado de préstamo sea PRIVADO.
        # Nadie puede cambiarlo desde fuera sin usar los métodos oficiales.
        # --------------------------------------------------
        self.__esta_prestado = False 

    # Métodos para interactuar con el atributo privado (Getters y Setters)
    def consultar_disponibilidad(self):
        return "Disponible" if not self.__esta_prestado else "Prestado"

    def set_prestado(self, estado):
        self.__esta_prestado = estado

    # Contrato obligatorio: Cada material debe decir bajo qué reglas se presta
    @abstractmethod
    def reglas_prestamo(self):
        pass

# ==========================================================
# 3. PILAR: HERENCIA
# 'Libro' y 'Revista' heredan todo lo de 'MaterialBiblioteca'
# ==========================================================

class Libro(MaterialBiblioteca):
    def __init__(self, titulo, codigo, autor):
        # super() llama al constructor del padre para guardar titulo y codigo
        super().__init__(titulo, codigo)
        self.autor = autor

    # Implementamos las reglas específicas para Libros
    def reglas_prestamo(self):
        return f"El libro '{self.titulo}' se presta por 15 días. Se puede llevar a casa."

class Revista(MaterialBiblioteca):
    def __init__(self, titulo, codigo, edicion):
        super().__init__(titulo, codigo)
        self.edicion = edicion

    # Implementamos las reglas específicas para Revistas
    def reglas_prestamo(self):
        return f"La revista '{self.titulo}' (Ed. {self.edicion}) es solo para lectura en sala."

# ==========================================================
# 4. PILAR: POLIMORFISMO
# Creamos una función que trata a todos los objetos por igual
# ==========================================================

def procesar_solicitud_estudiante(material):
    # No importa si es Libro o Revista, el objeto sabe qué 'reglas_prestamo' usar
    print(f"--- Solicitud para: {material.titulo} ---")
    print(f"Estado actual: {material.consultar_disponibilidad()}")
    print(f"Regla: {material.reglas_prestamo()}")
    
    # Simulamos que el estudiante lo toma prestado
    material.set_prestado(True)
    print(f"Nuevo estado: {material.consultar_disponibilidad()}\n")

# --- PRUEBA DEL SISTEMA ---

# 1. Creamos los objetos (Instanciación)
mi_libro = Libro("Cien Años de Soledad", "L-001", "Gabriel García Márquez")
mi_revista = Revista("National Geographic", "R-502", "Enero 2024")

# 2. Usamos el Polimorfismo
# Pasamos objetos diferentes a la misma función
biblioteca_del_dia = [mi_libro, mi_revista]

for item in biblioteca_del_dia:
    procesar_solicitud_estudiante(item)