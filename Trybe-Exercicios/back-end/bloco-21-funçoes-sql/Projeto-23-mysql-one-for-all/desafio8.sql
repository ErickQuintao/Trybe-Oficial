SELECT * FROM SpotifyClone.t_album;
SELECT * FROM SpotifyClone.t_artistic;
SELECT a.artistic AS artista,al.album AS album
FROM SpotifyClone.t_album AS al
INNER JOIN SpotifyClone.t_artistic AS a 
ON a.favorite_id = al.favorite_id
WHERE a.artistic =  'Walter Phoenix' AND al.favorite_id = 1
ORDER BY album;