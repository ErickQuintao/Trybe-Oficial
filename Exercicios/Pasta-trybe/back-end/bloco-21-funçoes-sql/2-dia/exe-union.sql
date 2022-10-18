-- 1 Todos os funcionários foram promovidos a atores. Monte uma query
--  que exiba a união da tabela staff com a tabela actor,
-- exibindo apenas o nome e o sobrenome. Seu resultado
-- não deve excluir nenhum funcionário ao unir as tabelas.
SELECT first_name,last_name FROM sakila.staff
UNION ALL
SELECT first_name,last_name FROM sakila.actor;

-- 2 Monte uma query que una os resultados das tabelas customer
--  e actor, exibindo os nomes que contêm a palavra “tracy” na 
-- tabela customer e os que contêm “je” na tabela actor. Exiba 
-- apenas os resultados únicos.
-- NAO SEI 

-- 3 Monte uma query que exiba a união dos cinco últimos nomes
-- da tabela actor, o primeiro nome da tabela staff e 
-- cinco nomes a partir da 15ª posição da tabela customer. 
-- Não permita que dados repetidos sejam exibidos. Ordene
-- os resultados em ordem alfabética.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.staff;
SELECT * FROM sakila.customer;


(SELECT * FROM sakila.actor LIMIT 5 OFFSET 594)
UNION ALL
(SELECT * FROM sakila.staff LIMIT 1)
UNION ALL 
(SELECT * FROM sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name;
