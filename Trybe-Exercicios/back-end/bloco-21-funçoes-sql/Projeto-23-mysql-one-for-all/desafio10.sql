SELECT * FROM SpotifyClone.t_history_date;
SELECT * FROM SpotifyClone.t_songs;
SELECT * FROM SpotifyClone.t_planing;
SELECT
 s.songs AS nome ,COUNT(hd.use_id)  AS reproducoes
 FROM SpotifyClone.t_songs AS s
 INNER JOIN SpotifyClone.t_history_date
 ON s.songs_id = hd.songs_id
 GROUP BY s.songs ORDER BY s.songs