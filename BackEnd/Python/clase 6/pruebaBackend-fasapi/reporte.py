from fpdf import FPDF

nombre = "Elio Gutierrez"
curso = "Modulo de Python"
fecha = "12 de Febrero, 2026"
nota = "19.56"

mensaje_final = f"El estudiante {nombre} ha obtenido una nota de {nota} en el curso {curso} el día {fecha}."


class PDF_Con_Fondo(FPDF):
    def header(self):
        try:
            self.image("fondo.png", x=0, y=0, w=210, h=297)
        except:
            print("Aviso: No se encontro 'fondo.png'. Se generara con fondo blanco")


pdf = PDF_Con_Fondo()


pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)

pdf.set_font("Arial", 'B', 16)
pdf.set_y(50)
pdf.set_text_color(50,50,50)

pdf.multi_cell(w=0, h=10, txt=mensaje_final, align='C')

pdf.output("reporte.pdf")

print("Reporte generado exitosamente: 'reporte.pdf'")