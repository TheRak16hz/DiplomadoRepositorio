from abc import ABC, abstractmethod

class EntidadGeografica(ABC): #abstraccion
    def __init__(self, codigo, nombre, descripcion, status):
        self.codigo = codigo
        self.nombre = nombre,
        self.descripcion = descripcion
        self.__status = status #encapsulamiento

    def obtener_status(self):
        return "Activo" if self.__status == 'A' else "Inactivo"

    @abstractmethod #abstraccion
    def mostrar_detalle(self):
        pass

class Continente(EntidadGeografica): #herencia
    def __init__(self, cod_con, nom_con, des_con, est_con):
        super().__init__(cod_con, nom_con, des_con, est_con)
    
    #polimorfismo
    def mostrar_detalle(self):
        return f"[Continente] {self.nombre}: {self.descripcion} (Est: {self.obtener_status()})"

class Zona_Horaria(EntidadGeografica):
    def __init__(self, cod_zon, nom_zon, des_zon, est_zon, arc_zon, dif_zon):
        super().__init__(cod_zon, nom_zon, des_zon, est_zon)
        self.acronimo = arc_zon
        self.diferencia = dif_zon
    
    def mostrar_detalle(self):
        return f"[Zona Horaria] {self.nombre} ({self.acronimo}): UTC {self.diferencia} (Est: {self.obtener_status()})"

class Pais(EntidadGeografica):
    def __init__(self, cod_pai, nom_pai, des_pai, est_pai, ali_pai, cti_pai, fky_con):
        super().__init__(cod_pai, nom_pai, des_pai, est_pai)
        self.alias = ali_pai
        self.codigo_tlf = cti_pai
        self.fk_continente = fky_con
    
    def mostrar_detalle(self):
        return f"[Pais] {self.nombre} ({self.alias}), {self.descripcion} - Tlf: +{self.codigo_tlf} - ubicado en el continente: ID {self.fk_continente}. status: {self.obtener_status()}"

class Estado(EntidadGeografica):
    def __init__(self, cod_est, nom_est, des_est, est_est, fky_pai):
        super().__init__(cod_est, nom_est, des_est, est_est)
        self.fk_pais = fky_pai
    
    def mostrar_detalle(self):
        return f"[Estado] {self.nombre}, {self.descripcion} - ubicado en el pais: ID {self.fk_pais} - status: {self.obtener_status()}"


class Ciudad(EntidadGeografica):
    def __init__(self, cod_ciu, nom_ciu, des_ciu, est_ciu, fky_est, fky_zon):
        super().__init__(cod_ciu, nom_ciu, des_ciu, est_ciu)
        self.fk_estado = fky_est
        self.fk_zona_horaria = fky_zon
        
    def mostrar_detalle(self):
        return f"[Ciudad]: {self.nombre}, {self.descripcion} - pertenece al estado ID {self.fk_estado}, zona horaria: {self.fk_zona_horaria}. - status: {self.obtener_status()}"


#uso del sistema: Polimorfismo en accion

def reporte_geografico(lista_lugares):
    print("--- Detalle del Lugar --- \n")
    for lugar in lista_lugares:
        print(lugar.mostrar_detalle())

america_de_sur = Continente(1, "America del sur", "sudamerica", "A")

zona_vnzla = Zona_Horaria(6, "Hora VZLA", "Hora standar de venezuela", "A", "VET", -4.0)

venezuela = Pais(192, "Venezuela", "Tierra de las arepas", "A", "VE", "58", 1)

tachira = Estado(21, "Tachira", "Estado Gocho", "A", 192)

san_cristobal = Ciudad(79, "San Cristobal", "Capital del tachira", "A", 21, 6)

BD_geografia = [america_de_sur, zona_vnzla, venezuela, tachira, san_cristobal]

reporte_geografico(BD_geografia)