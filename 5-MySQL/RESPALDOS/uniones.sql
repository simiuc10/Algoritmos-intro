USE tienda;

-- INER JOIN
-- EXPLICITA

SELECT *
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

SELECT 
clientes.cliente_id AS 'Numero de cliente',
clientes.nombre AS Nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Union implicita
SELECT *
FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;

-- LEFT JOIN
SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- RIGHT JOIN
SELECT *
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- MOSTRAR LAS DIRECCIONES DE CADA PAIS
USE sakila;

SELECT 
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

/*
address - city_id/ address

city - city_id / city / country_id

country - country_id / country
*/



SELECT 
country.country AS pais,
city.city AS ciudad,
address.address AS Direccion
FROM country 
INNER JOIN city ON city.country_id = country.country_id 
INNER JOIN address ON address.city_id = city.city_id;
