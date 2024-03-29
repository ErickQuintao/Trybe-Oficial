--  1-Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(max_salary) FROM hr.jobs;
-- 2- Escreva uma query que exiba a diferença 
-- entre o maior e o menor salário.
SELECT MAX(max_salary) - MIN(min_salary) FROM hr.jobs;
-- 3-Escreva uma query que exiba a média salarial de cada
-- JOB_ID, ordenando pela média salarial em ordem decrescente.
SELECT job_id, AVG(salary) AS salary_media FROM hr.employees
ORDER BY salary_media DESC; 

-- 4-Escreva uma query que exiba a quantidade de dinheiro 
-- necessária para realizar o pagamento de todas as
--  pessoas funcionárias.
SELECT SUM(salary) FROM hr.employees;

-- 5-Escreva uma query que exiba quatro informações:
--  o maior salário, o menor salário, a soma de todos os 
-- salários e a média dos salários. Todos os valores devem 
-- ser formatados para ter apenas duas casas decimais.
SELECT MIN(salary), MAX(salary),SUM(salary),ROUND(AVG(salary),2) FROM hr.employees;


-- 6-Escreva uma query que exiba a quantidade de pessoas
-- que trabalham como pessoas programadoras (IT_PROG).
SELECT COUNT(job_id)  FROM hr.job_history
WHERE job_id='IT_PROG' 
;
-- 7-Escreva uma query que exiba a quantidade de
--  dinheiro necessária para efetuar o pagamento 
-- de cada profissão (JOB_ID).
SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id;

-- 8- Utilizando a query anterior, faça as alterações 
-- para que seja exibido somente a quantidade de dinheiro 
-- necessária para cobrir a folha de pagamento das pessoas
-- programadoras (IT_PROG).
SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id = "it_prog";

-- 9- Escreva uma query que exiba em ordem decrescente 
-- a média salarial de todos os cargos, exceto das pessoas
-- programadoras (IT_PROG).
SELECT job_id, AVG(salary) AS media_onw FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY media_onw DESC;

-- 10-Escreva um query que exiba média salarial e o número
-- de funcionários de todos os departamentos com mais de dez 
-- funcionários. Dica: agrupe pelo DEPARTMENT_ID.
SELECT deparment_id,AVG(salary) AS media_salary,COUNT(*) AS media_tudo 
FROM hr.employees
GROUP BY department_id
HAVING media_tudo > 10;

-- 11-  Escreva uma query que atualize a coluna PHONE_NUMBER, 
-- de modo que todos os telefones iniciados por 515 agora devem
-- iniciar com 777.
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET PHONE_NUMBER =777
WHERE PHONE_NUMBER LIKE  '515%';

SET SQL_SAFE_UPDATES = 1;

-- 12- Escreva uma query que só exiba as informações 
-- dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees
WHERE LENGTH(first_name) > 8;

-- 13-  Escreva uma query que exiba as seguintes informações de 
-- cada funcionário: id, primeiro nome e ano no qual
-- foi contratado (exiba somente o ano).
SELECT employees_id,first_name,YEAR(hire_date) FROM hr.employees;

-- 14-Escreva uma query que exiba as seguintes informações
--  de cada funcionário: id, primeiro nome e dia do mês no qual
-- foi contratado (exiba somente o dia).
SELECT employees_id,first_name,DAY(hire_date) FROM hr.employees;

-- 15- Escreva uma query que exiba as seguintes informações 
-- de cada funcionário: id, primeiro nome e mês no qual foi
-- contratado (exiba somente o mês).
SELECT employees_id,first_name,MONTH(hire_date) FROM hr.employees;

-- 16- Escreva uma query que exiba os nomes dos funcionários
-- em letra maiúscula.
SELECT LCASE(first_name) FROM hr.employees;

-- 17- Escreva uma query que exiba o sobrenome e a data de 
-- contratação de todos os funcionário contratados 
-- em julho de 1987.
SELECT last_name, hire_date FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-01';

-- 18- Escreva uma query que exiba as seguintes informações de
-- cada funcionário: nome, sobrenome, tempo que trabalha na 
-- empresa (em dias).
 SELECT first_name,last_name, -- (hire_date - CURRENT_DATE()) 
 DATEDIFF(CURRENT_DATE() , HIRE_DATE) FROM hr.employees;









