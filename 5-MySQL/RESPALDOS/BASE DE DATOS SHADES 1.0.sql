CREATE DATABASE product ;

USE product;

CREATE TABLE producto( producto_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre_producto VARCHAR(100) NOT NULL,
categorias VARCHAR(100) NOT NULL,
precio DECIMAL (8,2) NOT NULL,
descripcion VARCHAR(250) NOT NULL,
wishlist BIT NOT NULL
);

DROP TABLE producto;


CREATE TABLE carrito (
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
usuario_id INT NOT NULL,
producto_id INT NOT NULL,
cantidad_productos INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(5,2) NOT NULL
);

CREATE TABLE usuario(
usuario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
contrasenia VARCHAR(15),
nombre VARCHAR(65) NOT NULL,
correo VARCHAR(40) NOT NULL,
direccion VARCHAR(70) NOT NULL,
telefono VARCHAR(12) NOT NULL
);

DROP TABLE usuario;

INSERT INTO usuario(contrasenia, nombre, correo, direccion, telefono)
VALUES("aaaa", "Juan Perez Perez", "a@gmail.com", "San Mateo 172 colonia tezozomoc Azcapotzalco", 5551538623),
("pass", "Samantha Castellanos Rios", "sama@gmail.com", "Indios Verdes 25 colonia Quinta seccion Ciudad de Mexico", 5521265879),
("olaxd", "Elizabeth Olsen", "Eli@gmail.com", "Metepec 25 colonia lazaro cardenas Estado de Mexico", 5521236978);

SELECT * FROM producto;
SELECT * FROM carrito;
SELECT * FROM usuario;


