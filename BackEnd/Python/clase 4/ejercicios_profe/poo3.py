# ==========================================================
# 1. PILAR: ABSTRACCIÓN
# Importamos lo necesario para crear nuestra "idea general" de vehículo.
# ==========================================================
from abc import ABC, abstractmethod

class Vehiculo(ABC):
    def __init__(self, placa, hora_entrada):
        self.placa = placa
        self.hora_entrada = hora_entrada
        # --------------------------------------------------
        # 2. PILAR: ENCAPSULAMIENTO
        # La tarifa base es privada (__). Nadie puede cambiarla 
        # desde afuera para evitar fraudes en el cobro.
        # --------------------------------------------------
        self.__tarifa_base = 5.0  # Digamos que el precio base es $5

    # Método para que las clases hijas lean la tarifa privada de forma segura
    def get_tarifa_base(self):
        return self.__tarifa_base

    # Contrato obligatorio: Cada vehículo calcula su pago de forma distinta
    @abstractmethod
    def calcular_pago(self, horas):
        pass

# ==========================================================
# 3. PILAR: HERENCIA
# Automovil y Motocicleta heredan los atributos del Padre (Vehiculo)
# ==========================================================

class Automovil(Vehiculo):
    def __init__(self, placa, hora_entrada, tipo_compacto=True):
        # super() le pasa la placa y hora al constructor del padre
        super().__init__(placa, hora_entrada)
        self.tipo_compacto = tipo_compacto

    # Implementamos el cálculo para el Auto
    def calcular_pago(self, horas):
        # El auto paga la tarifa base completa por hora
        return horas * self.get_tarifa_base()

class Motocicleta(Vehiculo):
    def __init__(self, placa, hora_entrada, cilindraje):
        super().__init__(placa, hora_entrada)
        self.cilindraje = cilindraje

    # Implementamos el cálculo para la Moto (Pilar: Polimorfismo)
    def calcular_pago(self, horas):
        # La moto es más pequeña, paga solo el 50% de la tarifa base
        return horas * (self.get_tarifa_base() * 0.5)

# ==========================================================
# 4. PILAR: POLIMORFISMO
# Una función que cobra a cualquier vehículo sin importar qué sea
# ==========================================================

def generar_ticket(vehiculo, horas_estadia):
    # La función no sabe si es auto o moto, solo sabe que tiene 'calcular_pago'
    total = vehiculo.calcular_pago(horas_estadia)
    print(f"--- TICKET DE SALIDA ---")
    print(f"Vehículo Placa: {vehiculo.placa}")
    print(f"Tiempo: {horas_estadia} horas")
    print(f"Total a Pagar: ${total}")
    print("------------------------\n")

# --- PRUEBA EN EL ESTACIONAMIENTO ---

# Creamos un Auto y una Moto (Instanciación)
mi_carrito = Automovil("ABC-123", "08:00")
mi_moto = Motocicleta("XYZ-999", "09:00", 250)

# Aplicamos Polimorfismo: Pasamos ambos a la misma función de cobro
generar_ticket(mi_carrito, 3)  # Cobra 3 horas de auto
generar_ticket(mi_moto, 3)     # Cobra 3 horas de moto (más barato)