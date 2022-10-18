-- Exercício 6: Utilizando o INNER JOIN, selecione todas as informações
--  dos filmes que estão em cartaz (possuem theater_id diferente de NULL)
-- com avaliação maior que 8.
-- SELECT * FROM Pixar.Theater;
-- SELECT * FROM Pixar.Movies;
-- SELECT * FROM Pixar.BoxOffice;
-- SELECT m.title,m.length_minute,bo.rating,t.name,t.location
-- FROM Pixar.Movies AS m
-- INNER JOIN Pixar.BoxOffice AS bo
-- INNER JOIN Pixar.Theater AS t
-- ON  m.id = bo.movie_id
-- WHERE m.theater_id IS NOT NULL AND bo.rating > 8.0;
USE pixar;

SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    movies m
INNER JOIN
    boxoffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;