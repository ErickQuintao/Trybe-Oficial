-- Usando o IF na tabela sakila.film, exiba o id do filme, 
-- ítulo e uma coluna extra chamada ‘conheço o filme?’, 
-- que deve-se avaliar se o nome do filme é ‘ACE GOLDFINGER‘. 
-- o seja, exiba “Já assisti a esse filme”. Caso contrário, exiba 
-- o conheço o filme”. Não esqueça de usar um alias para renomear a
-- luna da condicional. 
SELECT film_id,title , IF(title = 'ACE GOLDFINGER','conheço o filme',
'Já assisti a esse filme')  FROM sakila.film;