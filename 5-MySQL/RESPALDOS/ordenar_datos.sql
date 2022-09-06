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
