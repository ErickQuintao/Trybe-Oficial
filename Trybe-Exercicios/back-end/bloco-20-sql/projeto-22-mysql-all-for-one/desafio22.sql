-- 22 - Atualize os dados de `discount` do `order_details`
-- para 15. (Não é necessário utilizar o SAFE UPDATE em sua query).
UPDATE order_details
SET discount = 15
WHERE discount = 0;
SELECT * FROM northwind.order_details;