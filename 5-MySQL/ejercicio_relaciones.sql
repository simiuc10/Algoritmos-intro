CREATE DATABASE ejercicioClase;
USE ejercicioClase;

CREATE TABLE cohorte (
cohorte_12 INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumnos_id INT NOT NULL,
instructor_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR(255) NOT NULL,
tipo_sesiones VARCHAR(255) NOT NULL,
ciudad VARCHAR (255) NOT NULL
);

DROP TABLE cohorte;
DROP TABLE Equipo;

CREATE TABLE Alumno (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);

CREATE TABLE direccion(
direccion_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);
DROP TABLE direccion;

SELECT * FROM direccion;

CREATE TABLE Instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
RFC VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL,
sesiones VARCHAR(255) NOT NULL
);

CREATE TABLE Equipo( 
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_integrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL  
);
DROP TABLE Equipo;

ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_alumno 
FOREIGN KEY (alumnos_id)
REFERENCES Alumno (alumno_id);

ALTER TABLE cohorte
ADD CONSTRAINT fk_cohorte_profesor 
FOREIGN KEY (instructor_id)
REFERENCES Instructor (instructor_id);

ALTER TABLE Equipo
ADD CONSTRAINT fk_equipo_alumno
FOREIGN KEY (alumno_id)
REFERENCES Alumno (alumno_id);

ALTER TABLE Equipo
DROP FOREIGN KEY fk_equipo_alumno;

ALTER TABLE direccion
ADD CONSTRAINT fk_direccion_alumno 
FOREIGN KEY (alumno_id)
REFERENCES Alumno (alumno_id);

INSERT INTO Alumno(nombre, edad, CURP, RFC, nivel_ingles, amonestaciones)
VALUES ('Sarada', '18', 'SAUCH456984', 'SUCHI45', 'INTERMEDIO', '0');


INSERT INTO Instructor(nombre, edad, cumpleanios, RFC, supervisor, sesiones)
VALUES ('Raul', '22', '2000-03-09', 'RULO541', 'MARINA', '5'),
('Victor', '52', '1970-06-08', 'vic545', 'MARINA', '5');

INSERT INTO cohorte(alumnos_id, instructor_id, numero_alumnos, horario, tipo_sesiones, ciudad)
VALUES (1,2,13,'Matutino', 'Sesiones1', 'CDMX'),
(2,1,12, 'matutino', 'Sesiones 1:1', 'GDL');

INSERT INTO Equipo (alumno_id,nombre,cantidad_integrantes,logo)
VALUES(1,'Dinos', 7, 'Shades'),
(2,'Vaquitas', 5, 'Vaquitas');

INSERT INTO Direccion(alumno_id, calle, pais, cp)
VALUES (1,'C','Mexico',1234);


SELECT * FROM Alumno;
SELECT * FROM cohorte;
SELECT * FROM Equipo;
SELECT * FROM Direccion;


