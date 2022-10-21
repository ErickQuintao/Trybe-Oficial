SELECT * FROM SpotifyClone.t_songs;
SELECT * FROM SpotifyClone.t_history_date;
SELECT 
C.songs AS cancao,
T.songs_id AS reproducoes
FROM SpotifyClone.t_songs AS C
INNER JOIN SpotifyClone.t_history_date AS T ON T.songs_id = C.songs_id
GROUP BY
T.songs_id
ORDER BY
reproducoes DESC, cancao ASC
LIMIT 2;
