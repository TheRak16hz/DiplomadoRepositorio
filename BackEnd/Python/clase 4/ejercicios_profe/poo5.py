# ==========================================================
# 1. PILAR: ABSTRACCIÓN
# Usamos el molde 'Contenido' para definir lo que es común.
# ==========================================================
from abc import ABC, abstractmethod

class Contenido(ABC):
    def __init__(self, id, titulo, genero, duracion):
        # --------------------------------------------------
        # 2. PILAR: ENCAPSULAMIENTO
        # Usamos '__' para que el ID sea privado y no se altere.
        # --------------------------------------------------
        self.__id = id
        self.titulo = titulo
        self.genero = genero
        self.duracion = duracion

    # Método para que los hijos puedan leer el ID privado
    def get_id(self):
        return self.__id

    # El método consultar tiene una base común para todos
    def consultar(self):
        return f"ID: {self.__id} | Título: {self.titulo} | Género: {self.genero} | Duración: {self.duracion}"

# ==========================================================
# 3. PILAR: HERENCIA
# La clase Serie hereda de Contenido.
# ==========================================================
class Serie(Contenido):
    def __init__(self, id, titulo, genero, duracion, temporada, episodio):
        # super() inicializa los atributos del padre (id, titulo, genero, duracion)
        super().__init__(id, titulo, genero, duracion)
        
        # --------------------------------------------------
        # 2. PILAR: ENCAPSULAMIENTO (específico de Serie)
        # Hacemos temporada y episodio privados como pediste.
        # --------------------------------------------------
        self.__temporada = temporada
        self.__episodio = episodio

    # ==========================================================
    # 4. PILAR: POLIMORFISMO
    # Redefinimos el método 'consultar' para que actúe distinto.
    # ==========================================================
    def consultar(self):
        # Paso A: Usamos super().consultar() para traer la info del padre
        info_base = super().consultar()
        
        # Paso B: Le agregamos la información específica de la Serie
        return f"{info_base} | Temp: {self.__temporada} | Ep: {self.__episodio}"

# --- PRUEBA DEL CÓDIGO ---

# Creamos una película (usando la clase base o una hija específica si existiera)
# Aquí usaremos Contenido para representar una película estándar
class Pelicula(Contenido):
    def consultar(self):
        return f"[PELÍCULA] {super().consultar()}"

# Instanciamos los objetos
mi_peli = Pelicula("P-001", "Inception", "Sci-Fi", "148 min")
mi_serie = Serie("S-500", "Stranger Things", "Suspenso", "50 min", "T4", "E01")

# Demostración de Polimorfismo
catalogo = [mi_peli, mi_serie]

print("--- CONSULTA DE CATÁLOGO ---")
for item in catalogo:
    # Aquí el polimorfismo decide cuál 'consultar' ejecutar:
    # Si es película, usa el del padre. Si es serie, usa el de la serie.
    print(item.consultar())