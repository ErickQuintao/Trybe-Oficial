CREATE DATABASE IF NOT EXISTS zoo;

use zoo;
CREATE TABLE animal (
animal_id INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(100) NOT NULL,
Espécie VARCHAR(100) NOT NULL,
Sexo VARCHAR(100) NOT NULL,
Idade VARCHAR(100) NOT NULL,
Localização VARCHAR(100) NOT NULL

) ENGINE = InnoDB;
CREATE TABLE cuidador(
    cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE gerente(
gerente_id INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(100) NOT NULL
) ENGINE = InnoDB;
CREATE TABLE animal_cuidador(
    animal_id INT,
    cuidador_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);
