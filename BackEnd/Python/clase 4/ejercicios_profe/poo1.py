
"""  *  *  *  El "Molde" y la Protección de Datos  *  *  *  """
# Importamos las herramientas para crear Clases Base Abstractas (Pilar: Abstracción)
from abc import ABC, abstractmethod

# Definimos la clase Empleado que hereda de ABC. No se pueden crear "Empleados" a secas.
class Empleado(ABC):
    # El constructor: se ejecuta al crear un empleado hijo
    def __init__(self, nombre, id_empleado):
        self.nombre = nombre          # Atributo público: nombre del empleado
        self.id_empleado = id_empleado # Atributo público: identificador único

    # El decorador indica que este método es obligatorio para los hijos (Pilar: Abstracción)
    @abstractmethod
    def calcular_salario(self):
        """Este método es un contrato: debe ser implementado obligatoriamente"""
        pass

# Definimos una clase para manejar el dinero (Pilar: Encapsulamiento)
class CuentaSueldo:
    # Al nacer la cuenta, definimos el saldo
    def __init__(self, saldo_inicial):
        # El prefijo '__' hace que el atributo sea PRIVADO. No se puede tocar desde fuera.
        self.__saldo = saldo_inicial

    # Método público para meter dinero, con validación de seguridad
    def depositar(self, monto):
        if monto > 0:                 # Solo permitimos depósitos positivos
            self.__saldo += monto     # Sumamos al atributo privado
            print(f"Depósito exitoso. Nuevo saldo: ${self.__saldo}")

    # Método público para leer el saldo sin permitir modificarlo directamente
    def consultar_saldo(self):
        return f"Saldo actual: ${self.__saldo}"

"""   *  *  *  Especialización y Reutilización (Herencia)  *  *  *  """
# Creamos un tipo de empleado que hereda de Empleado (Pilar: Herencia)
class EmpleadoTiempoCompleto(Empleado):
    # Constructor específico para este tipo de empleado
    def __init__(self, nombre, id_empleado, salario_mensual):
        # super() llama al constructor del padre para guardar nombre e ID
        super().__init__(nombre, id_empleado)
        # Atributo propio de esta clase
        self.salario_mensual = salario_mensual

    # Cumplimos el contrato de la clase abstracta (Pilar: Polimorfismo)
    def calcular_salario(self):
        return self.salario_mensual

# Otro tipo de empleado que también hereda de Empleado (Pilar: Herencia)
class EmpleadoPorHora(Empleado):
    # Constructor con datos de horas y tarifa
    def __init__(self, nombre, id_empleado, horas_trabajadas, tarifa_hora):
        # Reutilizamos la lógica del padre para el nombre e ID
        super().__init__(nombre, id_empleado)
        self.horas_trabajadas = horas_trabajadas # Atributo específico
        self.tarifa_hora = tarifa_hora           # Atributo específico

    # Cumplimos el contrato con una lógica distinta (Pilar: Polimorfismo)
    def calcular_salario(self):
        return self.horas_trabajadas * self.tarifa_hora
    
"""  *  *  *  Uso del Sistema (Polimorfismo en Acción)  *  *  *  """

# Esta función recibe una lista de objetos, sin importarle de qué clase exacta son
def procesar_nomina(empleados):
    print("--- Procesando Nómina del Mes ---")
    # Recorremos la lista de empleados
    for emp in empleados:
        # Aquí ocurre el Polimorfismo: Python decide en tiempo de ejecución
        # qué versión de 'calcular_salario' usar según el objeto que toque.
        pago = emp.calcular_salario()
        print(f"Empleado: {emp.nombre} | Pago: ${pago}")

# --- Ejecución Real ---

# Creamos (instanciamos) objetos de las clases hijas
juan = EmpleadoTiempoCompleto("Juan Pérez", "E001", 3000)
maria = EmpleadoPorHora("Maria García", "E002", 160, 20)

# Metemos a los empleados en una lista común
nomina = [juan, maria]

# Llamamos a la función que procesa a todos por igual (Polimorfismo)
procesar_nomina(nomina)

