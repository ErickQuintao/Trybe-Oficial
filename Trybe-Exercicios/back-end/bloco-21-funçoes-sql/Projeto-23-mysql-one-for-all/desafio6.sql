SELECT * FROM SpotifyClone.t_planing;
SELECT
MIN(planing_value) AS faturamento_minimo,
MAX(planing_value) AS faturamento_maximo,
ROUND(AVG(planing_value) ,2)AS faturamento_medio,
SUM(planing_value) AS faturamento_total
FROM SpotifyClone.t_planing;