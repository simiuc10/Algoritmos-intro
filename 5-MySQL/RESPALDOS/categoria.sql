CREATE DATABASE category01;

USE category01;

CREATE TABLE categoria (categoria_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre_categoria VARCHAR (50) NOT NULL,
maquillaje VARCHAR (50) NOT NULL,
skincare VARCHAR (50) NOT NULL,
cuidado_del_cabello VARCHAR (50) NOT NULL,
cuidado_corporal VARCHAR (50) NOT NULL
);

DROP TABLE categoria;

CREATE TABLE categoria(categoria_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre_categoria VARCHAR (50) NOT NULL
);

INSERT INTO categoria(nombre_categoria)
VALUES('Maquillaje'),
('skin care'),
('cuidado de cabello'),
('cuidado corporal');
SELECT * FROM categoria;

