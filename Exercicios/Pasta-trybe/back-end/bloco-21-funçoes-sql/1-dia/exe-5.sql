-- Monte um query que exiba:
-- A média de duração dos filmes e dê o nome da coluna de ‘Média de Duração’;
SELECT AVG(rental_duration) AS 'MEDIA DE DURAÇÃO' FROM sakila.film;
-- A duração mínima dos filmes como ‘Duração Mínima’;
SELECT MIN(rental_duration)AS 'DURAÇÃO MINIMA' FROM sakila.film;
-- A duração máxima dos filmes como ‘Duração Máxima’;
SELECT MAX(rental_duration)AS 'DURAÇÃO MAXIMA' FROM sakila.film;
-- A soma de todas as durações como ‘Tempo de Exibição Total’;
SELECT SUM(rental_duration)AS 'Tempo de Exibição Total' FROM sakila.film;
-- E, finalmente, a quantidade total de filmes 
-- cadastrados na tabela sakila.film como ‘Filmes Registrados’.
SELECT COUNT(rental_duration)AS 'Filmes Registrados' FROM sakila.film;