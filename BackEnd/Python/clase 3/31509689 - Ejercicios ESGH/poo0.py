# #clases, nomenclatura siempre en mayusculas y en plural

# class Peliculas:
#     def __init__(self, id, titulo, genero, duracion, clasificacion):
#         self.__id = id
#         self.__titulo = titulo
#         self.__genero = genero
#         self.__duracion = duracion
#         self.__clasificacion = clasificacion

#     def consultar(self):
#         print(self.__id)
#         print(self.__titulo)
#         print(self.__genero)
#         print(self.__duracion)
#         print(self.__clasificacion)

# # print(Peliculas)

# pelicula1 = Peliculas('1', 'La Fuga', 'Accion', 2.23, 'B')
# #print(pelicula1.duracion)

# pelicula1.consultar()


#creamos clase padre
class Peliculas:
    def __init__(self, id, titulo, genero, duracion, clasificacion):
        self.id = id
        self.titulo = titulo
        self.genero = genero
        self.duracion = duracion
        self.clasificacion = clasificacion

    #un metodo para mostrar la informacion
    def consultar(self):
        return f"ID: {self.id}, Titulo: {self.titulo}, Genero: {self.genero}, Duracion: {self.duracion}, Clasificacion: {self.clasificacion}"



#importante, que herede de Peliculas con la forma: class Hijo(Padre)
#creamos la clase hija
class Serie(Peliculas):
    def __init__(self, id, titulo, genero, duracion, clasificacion, temporadas, capitulos):
        #con super().__init__() se le envia al padre todo lo que no procese el hijo
        super().__init__(id, titulo, genero, duracion, clasificacion)
        #se inicializan los campos propios del hijo
        self.temporadas = temporadas
        self.capitulos = capitulos
    
    #y tambien un metodo de mostrar
    def consultar(self):
        #que a su vez, llama al metodo del padre tambien con super()
        return f"{super().consultar()}, Temporadas: {self.temporadas}, Capitulos: {self.capitulos}"



#creamos una funcion global, que recibe un objeto, y dentro, usa el moetodo consultar del objeto en cuestion
def mostrar_informacion_contenido(contenido):
    print(contenido.consultar())


#instanciamos objetos
pelicula1 = Peliculas('1', 'Avengers', 'Accion', 2.23, 'B')
serie1 = Serie('3', 'La Casa de Papel', 'Suspenso', 0.50, 'A', 5, 40)

#invocamos las funciones genericas
mostrar_informacion_contenido(pelicula1)
mostrar_informacion_contenido(serie1)
