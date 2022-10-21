SELECT * FROM SpotifyClone.t_album;
SELECT * FROM SpotifyClone.t_artistic;
SELECT * FROM SpotifyClone.t_favorite;
SELECT
 art.artistic AS artista,
 alb.album AS album,
 fav.use_id AS seguidores
 FROM SpotifyClone.t_artistic AS art
 INNER JOIN SpotifyClone.t_album AS alb 
 INNER JOIN SpotifyClone.t_favorite AS fav 
 ON fav.favorite_id = art.favorite_id
 ORDER BY  fav.use_id DESC,alb.album ASC, art.artistic ASC;