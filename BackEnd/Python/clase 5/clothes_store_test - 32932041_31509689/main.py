from abc import ABC, abstractmethod
from fpdf import FPDF
from datetime import date

class prenda(ABC):
    def __init__(self, talla, color, precio):
        self.talla = talla
        self.color = color
        self.__precio = precio

    def get_precio(self):
        return self.__precio

    @abstractmethod
    def mostrar_informacion(self):
        pass

    @abstractmethod
    def obtener_texto_reporte(self):
        pass

class camisa(prenda):
    def __init__(self, talla, color, precio, tipo_manga):
        super().__init__(talla, color, precio)
        self.tipo_manga = tipo_manga

    def mostrar_informacion(self):
        print(f"Camisa - Talla: {self.talla}, Color: {self.color}, Precio: {self.get_precio()}, Manga: {self.tipo_manga}")

    def obtener_texto_reporte(self):
        return f"Camisa - Talla: {self.talla}, Color: {self.color}, Precio: {self.get_precio()}, Manga: {self.tipo_manga}"

class pantalon(prenda):
    def __init__(self, talla, color, precio, tipo_bota):
        super().__init__(talla, color, precio)
        self.tipo_bota = tipo_bota

    def mostrar_informacion(self):
        print(f"Pantalon - Talla: {self.talla}, Color: {self.color}, Precio: {self.get_precio()}, Bota: {self.tipo_bota}")

    def obtener_texto_reporte(self):
        return f"Pantalon - Talla: {self.talla}, Color: {self.color}, Precio: {self.get_precio()}, Bota: {self.tipo_bota}"

class sueter(prenda):
    def __init__(self, talla, color, precio, tipo_cuello):
        super().__init__(talla, color, precio)
        self.tipo_cuello = tipo_cuello

    def mostrar_informacion(self):
        print(f"Sueter - Talla: {self.talla}, Color: {self.color}, Precio: {self.get_precio()}, Cuello: {self.tipo_cuello}")
    
    def reglas_descuento(self):
        return f"Si lleva 12 sueteres tiene un 20% de descuento"

    def obtener_texto_reporte(self):
        return f"Sueter - Talla: {self.talla}, Color: {self.color}, Precio: {self.get_precio()}, Cuello: {self.tipo_cuello}"


def solicitar_tipo():
    tipo = ""
    while tipo != "camisa" and tipo != "pantalon" and tipo != "sueter":
        tipo = input("Ingrese el tipo de prenda (camisa, pantalon, sueter): ")
    return tipo

def entrada_datos(tipo):
    talla = ""
    while talla != "S" and talla != "M" and talla != "L":
        talla = input("Ingrese la talla (S, M, L): ").upper()
    color = input("Ingrese el color: ")
    
    precio = 0
    while precio < 1:
        try:
            precio = float(input("Ingrese el precio: "))
        except ValueError:
            print("Precio no valido, ingrese un numero.")

    extra = ""
    if tipo == "camisa":
        extra = input("Ingrese el tipo de manga (corta, larga): ")
    elif tipo == "pantalon":
        extra = input("Ingrese el tipo de bota (holgado, ajustado): ")
    elif tipo == "sueter":
        extra = input("Ingrese el tipo de suteter (cerrado, abierto): ")
        
    return talla, color, precio, extra

def proceso_crear_prenda(tipo, datos):
    talla = datos[0]
    color = datos[1]
    precio = datos[2]
    extra = datos[3]
    
    if tipo == "camisa":
        nuevo_objeto = camisa(talla, color, precio, extra)
    elif tipo == "pantalon":
        nuevo_objeto = pantalon(talla, color, precio, extra)
    elif tipo == "sueter":
        nuevo_objeto = sueter(talla, color, precio, extra)
        
    return nuevo_objeto

def salida_mostrar_lista(lista):
    if not lista:
        print("\n No hay prendas registradas.")
    else:
        print("--- Inventario ---")
        for item in lista:
            item.mostrar_informacion()

def generar_pdf(lista):
    if not lista:
        print("Aun no hay prendas registradas para generar el PDF.")
        return

    pdf = FPDF()
    pdf.add_page()
    fecha = date.today()
    
    try:
        pdf.image("fondo.png", x=0, y=0, w=210, h=297)
    except:
        print("Advertencia: No se encontro la imagen 'fondo.png', el PDF saldra sin fondo.")

    pdf.set_font("Arial", size=14)
    pdf.cell(200, 100, txt=f"Reporte de Inventario de Prendas - Fecha: {fecha}", ln=1, align='C')
    
    pdf.set_font("Arial", size=12)
    for item in lista:
        texto = item.obtener_texto_reporte()
        pdf.cell(200, 10, txt=texto, ln=1)

    pdf.output("reporte_prendas.pdf")
    print("PDF generado correctamente como 'reporte_prendas.pdf'.")

def menu_principal():
    lista_datos = []
    opcion = "0"

    while opcion != "5":
        print("\n1. Crear prenda")
        print("2. Mostrar prendas")
        print("3. Reglas de descuento")
        print("4. Generar PDF")
        print("5. Salir")
        
        opcion = input("Ingrese una opcion: ")

        if opcion == "1":
            tipo = solicitar_tipo()
            datos = entrada_datos(tipo)
            objeto = proceso_crear_prenda(tipo, datos)
            lista_datos.append(objeto)
            print("Prenda guardada con exito.")

        elif opcion == "2":
            salida_mostrar_lista(lista_datos)

        elif opcion == "3":
            temp_sueter = sueter("M", "Negro", 0, "V")
            print(temp_sueter.reglas_descuento())
        
        elif opcion == "4":
            generar_pdf(lista_datos)

        elif opcion == "5":
            print("Saliendo del sistema...")
        else:
            print("\n Opcion no valida")

menu_principal()