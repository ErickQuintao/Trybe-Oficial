-- 8 - Faça uma consulta que retorne três colunas,
--  respectivamente, com os nomes 'A', 'Trybe' e 'eh', e 
--  com valores referentes a soma de '5 + 6', a string
--  'de', a soma de '2 + 8'.
-- <details>
--   <summary>&nbsp;&nbsp;<strong>👀 
--   Observações técnicas</strong></summary>
--   - Na primeira coluna, exiba a soma de `5 + 6` 
--   (essa soma deve ser realizada pelo SQL);
--   - Na segunda coluna deve haver a palavra \"de\";
--   - E por fim, na terceira coluna, exiba a soma de `2 + 8` 
--   (essa soma deve ser realizada pelo SQL);
--   - A primeira coluna deve se chamar \"A\", a segunda coluna 
--   deve se chamar \"Trybe\" e a terceira coluna deve se chamar \"eh\";
--   - Não use colunas pré-existentes, apenas o que for criado na hora.
--   <br />
-- </details>
Select 5 + 6 AS 'A', 'de' AS 'trybe',2 + 8 AS 'eh';
SELECT 5 + 6 AS 'A', 'de' AS Trybe, 2 + 8 AS 'eh';