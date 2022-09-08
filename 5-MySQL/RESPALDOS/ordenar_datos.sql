USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT NAME, Population FROM Country WHERE Name ='Mexico';

SELECT * FROM Country WHERE Name ='Mexico';

-- Alias
SELECT 5 + 5;

SELECT Name AS Nombre_de_país, Population AS 'Poblacion del país' FROM country ORDER BY Nombre_de_país DESC;

SELECT DISTINCT Continent FROM country; -- Distinct filtra los datos repetidos

-- WHERE cláusula
-- < > <= >= != =

SELECT * FROM Country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy ASC;

SELECT * FROM Country WHERE Continent != 'North America' ORDER BY Continent DESC;

-- Between
-- se utiliza junto con WHERE

SELECT * FROM Country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;
SELECT * FROM Country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

-- OR / AND  / !=  -- lógicos && 
SELECT * FROM Country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent ='North America';
SELECT * FROM Country WHERE Continent != 'Asia' AND Continent != 'Europe' AND Continent !='North America';

-- operador IN
SELECT * FROM Country WHERE Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent;  
SELECT * FROM Country WHERE Continent NOT IN ('Asia', 'Europe', 'North America') ORDER BY Continent; 

-- mostrar valores no nulos y nulos -- null -- not null
SELECT * FROM Country WHERE IndepYear IS NULL;
SELECT * FROM Country WHERE IndepYear IS NOT NULL;

-- LIKE -- similar o parecido-- sirve para buscar un patron en especifico
-- '%' buscar cualquier cantidad de caracteres


-- como se utiliza like
SELECT Name FROM Country WHERE Name LIKE '%and%';
SELECT * FROM Country WHERE Continent LIKE '%Asia';
SELECT * FROM Country WHERE Continent LIKE 'Asia';

-- '_' especificamos un caracter 
-- como se utiliza un caracter
SELECT Name FROM Country WHERE Name LIKE '%e__a'; -- (para buscar mas cosas entre esos dos caracteres agregar otro _ bajo) 