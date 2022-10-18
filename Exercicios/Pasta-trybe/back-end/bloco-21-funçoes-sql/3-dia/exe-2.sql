-- CREATE DATABASE IF NOT EXISTS albums;
use albums;
CREATE TABLE Artista (
artista_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL
) ENGINE = InnoDB;
use albums;
CREATE TABLE EstiloMusical (
estilo_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL
) ENGINE = InnoDB;
use albums;
CREATE TABLE Album (
album_id INT PRIMARY KEY AUTO_INCREMENT,
    estilo_id INT NOT NULL,
        artista_id INT NOT NULL,
foreign key (artista_id) references Artista(artista_id),
title VARCHAR(100) NOT NULL,
preco VARCHAR(100) NOT NULL,
foreign key (estilo_id) references EstiloMusical(estilo_id)
) ENGINE = InnoDB;
SELECT * FROM albums.Album;