
'''el molde y la proteccion de datos'''
#importamos las herramientas para crear Clases Base Abstractas. (Pilar: Abstraccion)
from abc import ABC, abstractmethod

#definimos la clase empleado que hereda de ABC. No se puede crear "Empleados" a secas
class Empleado(ABC):
    #el Constructor: se ejecuta al crear un empleado hijo
    def __init__(self,nombre, id_empleado):
        self.nombre = nombre #Atributo publico: nombre del empleado
        self.id_empleado = id_empleado #Atributo publico: identificador unico

    # El decorador indica que este metodo es obligatorio para sus hijos
    @abstractmethod
    def calcular_salario(self):
        #este metodo es un contrato: debe ser implementado obligatoriamente
        pass

#Definimos a una clase para manejar el dinero (Pilar: Encapsulamiento)
class CuentaSueldo:
    #al nacer la cuenta, definimos el saldo
    def __init__(self, saldo_inicial):
        # El prefijo '__' hace que el atributo sea PRIVADO. No se puede tocar desde fuera
        self.__saldo = saldo_inicial

    #metodo publico para consultar el saldo
    def depositar(self, monto):
        if monto > 0:
            self.__saldo += monto
            print(f"Deposito exitoso de {monto}. Saldo actual: {self.__saldo}")

    #metodo publico para leer el saldo sin permitir modificarlo directamente
    def consultar_saldo(self):
        return f"saldo actual: ${self.__saldo}"

# Especializacion y Reutilizacion: (Herencia)
#Creamos un tipo de empleado que hereda de Empleado (Pilar: Herencia)
class EmpleadoTiempoCompleto(Empleado):
    #contructor especifico para este tipo de empleado
    def __init__(self, nombre, id_empleado, salario_mensual):
        #super() llama al contructor padre para guardar nombre e ID
        super().__init__(nombre, id_empleado)
        #atributo propio de esta clase
        self.salario_mensual = salario_mensual

#cumplimos el contrato de la clase abstracta (Pilar: Polimorfismo)
    def calcular_salario(self):
        return self.salario_mensual

# otro tipo de empleado que tambien hereda de empleado (Pilar: Herencia)
class EmpleadoPorHora(Empleado):
    #contructor con datos de horas y tarifa
    def __init__(self, nombre, id_empleado, horas_trabajadas, tarifa_hora):
        #reutilizamos la logica del padre para el nombre e ID
        super().__init__(nombre, id_empleado)
        self.horas_trabajadas = horas_trabajadas
        self.tarifa_hora = tarifa_hora
    
    #cumplimos el contrato con una logica distinta (Pilar: Polimorfismo)
    def calcular_salario(self):
        return self.horas_trabajadas * self.tarifa_hora

# Uso del sistema (Polimorfismo en Accion)

#esta funcion recue una lista de objetos sin importarle que clase exacta son
def procesar_nomina(empleados):
    print("Procesando nomina...")
    #recorremos la lista de empleados
    for emp in empleados:
        # aqui ocurre el polimorfismo: Python decide en tuempo de ejecucion
        # que version de calcular_salario usar segun el objeto que le toque
        pago = emp.calcular_salario()
        print(f"Empleado: {emp.nombre}, Pago: ${pago}")
##############################################################################
#---ejecucion real---

#creamos (instanciamos) objetos de las clases hijas
david = EmpleadoTiempoCompleto("David Parada", "E001", 3000)
yanis = EmpleadoPorHora("Yanis Monzon", "E002", 120, 15)
carlos = EmpleadoTiempoCompleto("Carlos Moncada", "E003", 3500)
ale = EmpleadoPorHora("Alexandra Alvarez", "E004", 100, 20)

procesar_nomina([david, yanis, carlos, ale])