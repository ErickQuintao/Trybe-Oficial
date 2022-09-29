SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1,2,3;
SELECT 10 + 15;
SELECT (7 * 9) /6 ;
SELECT * FROM Scientists;
SELECT 'Nome do Projeto' AS nome, 'Tempo de Trabalho' AS Houras FROM projects;
SELECT Name FROM Scientists
ORDER BY Name ASC;
SELECT Name FROM Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto ',Name,' precisou de ',Hours,' horas para ser concluído.') FROM Projects;
SELECT Name,Hours FROM Projects  ORDER BY Hours DESC LIMIT 3;
SELECT DISTINT Project FROM AssignedTO;
SELECT Name FROM Project ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Project ORDER BY Hours  LIMIT 1 OFFSET 1;
SELECT * FROM Project ORDER BY Hours  LIMIT 5;
SELECT CONCAT('Existem ',Count(NUmber),'cientistas na tabela Scientists.') FROM Scientists;
