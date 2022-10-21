SELECT * FROM SpotifyClone.t_history_date;
SELECT * FROM SpotifyClone.t_user;
SELECT U.usuario,HD.songs_id  AS quantidade_musicas_no_historico
FROM SpotifyClone.t_history_date AS HD
INNER JOIN SpotifyClone.t_user AS U
ON U.use_id = HD.use_id
-- WHERE use_id = 3;
WHERE usuario = 'Bill';