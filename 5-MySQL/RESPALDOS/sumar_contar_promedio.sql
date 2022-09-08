USE sakila;

SELECT * FROM payment;

-- SUM() SUMA -- AVG() -- COUNT ()

SELECT customer_id, amount  FROM payment;

-- COUNT() cuenta las filas de una tabla
-- como usar count 
SELECT COUNT(*)  FROM payment;
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment; -- AS '' -- SIRVE PARA RENOMBRAR 
SELECT COUNT(*) AS 'Cantidad de países' FROM world.country; -- podemos llamar otra base de datos si se pone el nombre mas . y seccion

-- cantidad de ventas que tuvo el trabajador 2
SELECT COUNT(*) FROM payment WHERE 	staff_id = 2; -- llamar un id en especifico

-- como saber la cantidad de clientes distintos 
SELECT COUNT(DISTINCT customer_id) FROM payment;

/*
suma
*/
SELECT SUM(amount) AS 'Total de rentas' FROM payment;
SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- ¿cual cliente realizo mas ventas?
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) DESC;
-- ¿cual cliente realizo mas rentas?
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- Group BY - agrupa solo si se usa con SUM
-- Order BY - ordena segun la columna o funcion que le indiquemos ASC / DESC
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿cual cliente realizo mas rentas?
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id ORDER BY SUM(amount) DESC;

-- AVG - regresa el promedio
SELECT AVG(amount) AS Promedio FROM payment;

-- ¿cual cliente gasto mas en promedio?
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;



