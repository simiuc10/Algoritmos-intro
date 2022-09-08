USE generationold;

SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

SELECT 
name.cliente_id AS 'Numero de cliente',
clientes.nombre AS Nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;