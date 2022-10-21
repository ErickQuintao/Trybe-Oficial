SELECT * FROM SpotifyClone.t_songs;
SELECT
COUNT(songs) AS cançoes,
COUNT(DISTINCT favorite_id) AS artistas,
COUNT(DISTINCT album_id) AS albums
FROM SpotifyClone.t_songs;
 