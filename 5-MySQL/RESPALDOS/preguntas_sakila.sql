USE sakila;

SELECT * FROM film;

-- idioma de pelicula
SELECT title, name FROM film, language; 

-- monto total que pago el cliente por renta de peliculas
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;





SELECT title, SUM(rental_rate) FROM film GROUP BY title ORDER BY SUM(rental_duration) DESC;

