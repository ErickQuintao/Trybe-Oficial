-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais 
-- (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT m.title,bo.domestic_sales,bo.international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON bo.movie_id = m.id; 

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o
 -- número de vendas para cada filme que possui um número maior de vendas 
--  internacionais (international_sales) do que vendas 
 -- nacionais (domestic_sales).
 SELECT m.title,bo.domestic_sales,bo.international_sales
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON bo.movie_id = m.id
WHERE bo.international_sales >  bo.domestic_sales; 

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne 
-- os filmes e sua avaliação (rating) em ordem decrescente.
SELECT m.title,bo.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON bo.movie_id = m.id
ORDER BY rating DESC; 

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne 
-- todos os dados dos cinemas, mesmo os que não possuem 
-- filmes em cartaz e, adicionalmente, os dados dos filmes que 
-- estão em cartaz nestes cinemas. Retorne os nomes 
-- dos cinemas em ordem alfabética.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;
SELECT t.name,t.location,m.director,
    m.year,
    m.length_minutes
FROM Pixar.movie AS m
LEFT JOIN  Pixar.Theater AS t
ON t.id = m.id
ORDER BY t.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne
--  todos os dados dos filmes, mesmo os que não estão em 
-- cartaz e, adicionalmente, os dados dos cinemas que
--  possuem estes filmes em cartaz. Retorne os nomes dos
-- cinemas em ordem alfabética.
SELECT t.name,t.location,m.director,
    m.year,
    m.length_minutes
FROM Pixar.movie AS m
RIGHT JOIN  Pixar.Theater AS t
ON t.id = m.id
ORDER BY t.name;

