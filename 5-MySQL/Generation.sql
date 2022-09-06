CREATE DATABASE generation;
USE generation;

CREATE TABLE cohorte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieros INT NOT NULL,
dirección VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL
);


INSERT INTO cohorte_16 ( nombre, apellido, companieros, dirección, proyecto)
VALUES ('Sarada', 'Uchiha', '7', 'Konoha', 'Java'),
('Hinata', 'Hyiuga', '5', 'Konoha', 'JavaScript'),
('Tsunade', 'Senju', '8', 'Konoha', 'JavaScript'),
('Ino', 'Yamanaka', '9', 'Konoha', 'Java'),
('Itachi', 'Uchiha', '7', 'Konoha', 'JavaScript');

SELECT * FROM cohorte_16;

DELETE FROM cohorte_16
WHERE alumno_id = 3;

SELECT * FROM cohorte_16;

UPDATE cohorte_16
SET nombre = 'Bulma', 
apellido = 'vegeta'
WHERE alumno_id = 5;

UPDATE cohorte_16
SET nombre = REPLACE (nombre, 'Ino', 'milk');

SELECT * FROM cohorte_16;

SELECT nombre, apellido FROM cohorte_16 WHERE nombre = 'Sarada';

SELECT * FROM cohorte_16;

SELECT nombre, apellido, companieros FROM cohorte_16 ORDER BY apellido ASC;
/*ASC - DESC*/ -- ascendente y descendente


