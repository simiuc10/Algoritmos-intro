-- SHOW DATABASES;
-- se usan dos guiones medios con espacio para hacer comentario de una linea
/* se usan para hacer comentario de bloque */ 

CREATE DATABASE tienda;

USE tienda;

-- DROP DATABASE tienda;

CREATE TABLE clientes( 
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
);

DROP TABLE clientes;

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Sarada', 'Uchiha', 5213215465, 'comala'),
 ('Hinata', 'Hyuga', 321321456, 'konoha'),
 ('Ino', 'Yamanaka',321546221, 'konoha'),
 ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');


SELECT * FROM clientes;

DELETE FROM clientes
WHERE cliente_id = 3