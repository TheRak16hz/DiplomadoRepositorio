from PIL import Image

# Ejemplo: Abrir una imagen
imagen = Image.open("fondo.png")
imagen.show()

img = Image.open("fondo.png")
img.save("fondo_real.png", "PNG")