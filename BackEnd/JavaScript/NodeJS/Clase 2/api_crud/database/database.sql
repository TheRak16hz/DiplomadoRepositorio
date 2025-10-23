create database apli;

create table apli.public.client(
	id serial primary key,
	nombre varchar(25),
	direc varchar(60),
	telef varchar(12)
);

insert into public.client(nombre,direc,telef) values
('Pepe Trueno', 'Avenida Quinta, # 2-24', '04123452187'),
('Maria Palotes', 'Barrio Sucre, vereda 3, casa 2', '04161007611'),
('Tony Stasrk', 'Altos de Pirineos, Casa Plus, #67-9', '04247895443'),
('Linda Carter', 'Barrio Obrero calle 9 con carrera 19, #19-56', '04123408811');

select * from public.client;