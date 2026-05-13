# ==========================================================
# 1. PILAR: ABSTRACCIÓN
# Definimos la clase base 'Electrodomestico'. Es el concepto
# general de cualquier aparato que vendemos.
# ==========================================================

class Electrodomestico:
    def __init__(self, marca, modelo, precio):
        self.marca = marca
        self.modelo = modelo
        self.precio = precio
        # --------------------------------------------------
        # 2. PILAR: ENCAPSULAMIENTO
        # Usamos '__' para que el Código de Inventario sea PRIVADO.
        # Lo llamamos '__codigo_inventario' para no confundirlo con 'Series'.
        # --------------------------------------------------
        self.__codigo_inventario = f"INV-{marca[:2].upper()}-{id(self) % 1000}"

    # Método para leer el código privado (Getter)
    def obtener_codigo(self):
        return self.__codigo_inventario

    # Método que será polimórfico
    def consultar_detalles(self):
        return f"Marca: {self.marca} | Modelo: {self.modelo} | Precio: ${self.precio}"

# ==========================================================
# 3. PILAR: HERENCIA
# La clase 'Refrigerador' hereda de 'Electrodomestico'.
# Reutiliza marca, modelo y precio, pero añade su propia lógica.
# ==========================================================

class Refrigerador(Electrodomestico):
    def __init__(self, marca, modelo, precio, tiene_congelador):
        # super() inicializa los datos que el padre ya sabe manejar
        super().__init__(marca, modelo, precio)
        # Atributo específico de la clase hija
        self.tiene_congelador = tiene_congelador

    # ==========================================================
    # 4. PILAR: POLIMORFISMO
    # Modificamos 'consultar_detalles' para que muestre info extra.
    # ==========================================================
    def consultar_detalles(self):
        # Usamos super().consultar_detalles() para traer la info del padre
        info_basica = super().consultar_detalles()
        extra = "Con Congelador" if self.tiene_congelador else "Sin Congelador"
        return f"[REFRIGERADOR] {info_basica} | Extra: {extra}"

# --- INSTANCIACIÓN (CREACIÓN DE OBJETOS) ---

# 1. Dos instanciaciones de la CLASE PADRE (Electrodomésticos genéricos)
licuadora = Electrodomestico("Oster", "PowerMix", 60)
tostadora = Electrodomestico("Black+Decker", "T2-Plus", 45)

# 2. Dos instanciaciones de la CLASE HIJA (Objetos especializados)
refri_grande = Refrigerador("Samsung", "FamilyHub", 1200, True)
refri_oficina = Refrigerador("Mabe", "Minibar-01", 300, False)

# --- PRUEBA DEL SISTEMA ---

catalogo = [licuadora, tostadora, refri_grande, refri_oficina]

print("--- REPORTE DE INVENTARIO ACTUAL ---\n")
for producto in catalogo:
    # Mostramos el código privado y el detalle (Polimorfismo en acción)
    print(f"CÓDIGO: {producto.obtener_codigo()}")
    print(producto.consultar_detalles())
    print("-" * 50)