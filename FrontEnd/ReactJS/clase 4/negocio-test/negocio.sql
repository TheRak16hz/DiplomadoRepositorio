--Crear la base de datos “negocio” en PostgreSQL:

CREATE DATABASE negocio;

--Crear la tabla de datos “clientes”:

CREATE TABLE cliente ( id SERIAL PRIMARY KEY,
    nombre VARCHAR(70) NOT NULL,
    apellido VARCHAR(70) NOT NULL,
    direccion VARCHAR(100),
    telefono VARCHAR(80),
    nacimiento DATE);

--Insertamos algunos datos de prueba (Seeds) para que puedas testear los endpoints:

INSERT INTO cliente (nombre, apellido, direccion, telefono, nacimiento) 
VALUES
('Juan', 'Perez', 'Av. Siempre Viva 123', '555-0199', '1990-05-15'),
('Maria', 'Garcia', 'Calle Falsa 456', '555-0122', '1985-11-20'),
('Carlos', 'Rodriguez', 'Diagonal 78 #12-34', '555-0155', '1992-03-10');


--Insertamos mas datos de prueba:
INSERT INTO cliente (nombre, apellido, direccion, telefono, nacimiento) 
VALUES 
('Alejandro', 'Pinto', 'Av. Las Américas, Res. El Rosario, Edif. A', '0274-2631122', '1995-03-12'),
('Gabriela', 'Uzcátegui', 'Sector Los Cuchillos, Calle Principal #45', '0414-7001122', '1988-07-25'),
('Ricardo', 'Márquez', 'Urb. El Campito, Vereda 5, Casa 12', '0424-7558899', '1992-11-02'),
('Valentina', 'Rangel', 'Santa Juana, Av. 16 de Septiembre, Local 4', '0274-2445566', '2000-01-30'),
('Leonardo', 'Briceño', 'Chorros de Milla, Conjunto Residencial Albarregas', '0412-5006677', '1983-05-18'),
('Mariangel', 'Peña', 'La Hechicera, Núcleo Universitario, Apto 3B', '0416-9003344', '1997-09-09'),
('Francisco', 'Dávila', 'Ejido, Sector Pozo Hondo, Calle El Molino', '0426-3332211', '1975-12-14'),
('Andreína', 'Contreras', 'Av. Urdaneta, Edif. El Vigía, Piso 2', '0274-2529988', '1994-06-21'),
('Gustavo', 'Molina', 'Tabay, Sector La Mucuy Baja, Parcela 8', '0414-7221100', '1980-02-10'),
('Elena', 'Quintero', 'Pueblo Nuevo, Calle 3 con Av. Principal', '0412-8887766', '1999-08-05');