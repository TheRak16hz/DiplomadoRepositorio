from abc import ABC, abstractmethod

#1) abstraccion, se crea la clase principal, que sera la clase padre, a su vez hereda ABC para que esta clase sea abstracta y no se pueda declarar objetos de esta misma, sino que tenga que ser heredada por alguna clase hija y poder
class Empleado(ABC):
    def __init__(self, nombre, id_empleado): #constructor
        self.nombre = nombre
        self.id_empleado = id_empleado

    @abstractmethod
    #definimos que este es un metodo abstracto, es decir se debe heredar obligatoriamente
    def calcular_salario(self):
        #el metodo por si solo no hace nada, pero debera ser heredado
        pass

#2) encapsulamiento: ahora vamos a crear otra clase, con la particularidad de que tendra sus variables como privadas, evitando que se puedan consultar desde fuera
class SueldoCuenta:
    def __init__(self, saldo_inicial):
        self.__saldo = saldo_inicial

    def depositar(self, monto):
        if monto > 0:
            self.__saldo += monto
            print(f"deposito exitoso. su saldo actual ahora es de {self.__saldo}$")
    #
    def consultar_saldo(self):
        return f"su saldo actual es de {self.__saldo}$"

#3) herencia: aqui es donde una clase hijo hereda a una clase padre con sus parametros y propiedades
class EmpleadoTiempoCompleto(Empleado):
    def __init__(self, nombre, id_empleado, salario_mensual):
        super().__init__(nombre, id_empleado) #le manda al padre
        self.salario_mensual = salario_mensual

    #4) polimorfismo: creamos una clase que casualmente tiene el mismo nombre, pero dependiendo de que clase la use, se comportará diferente
    def calcular_salario(self):
        return self.salario_mensual

class EmpleadoPorHora(Empleado):
    def __init__(self, nombre, id_empleado, horas_trabajadas, tarifa_hora):
        super().__init__(nombre, id_empleado)
        self.horas_trabajadas = horas_trabajadas
        self.tarifa_hora = tarifa_hora

    def calcular_salario(self):
        return self.horas_trabajadas * self.tarifa_hora



def procesar_nomina(empleados):
    print("---procesando nomina---")
    for emp in empleados:
        pago = emp.calcular_salario()
        print(f"empleado: {emp.nombre} | pago: {pago}$")




#ejecucion

juan = EmpleadoTiempoCompleto("juan", "E001", 2500)

maria = EmpleadoPorHora("maria", "E002", 48, 50)

nomina = [juan,maria]

procesar_nomina(nomina)