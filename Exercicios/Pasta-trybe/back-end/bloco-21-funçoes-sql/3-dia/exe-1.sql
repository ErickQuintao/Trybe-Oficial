-- AUTO_INCREMENT PRIMARY KEY
-- CREATE DATABASE IF NOT EXISTS normalization;
truncate normalization.funcionario;
USE normalization;
CREATE TABLE funcionario (
funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
NOME VARCHAR(100) NOT NULL,
SOBRENOME VARCHAR(100) NOT NULL,
CONTATO  VARCHAR(100) NOT NULL,
telefone VARCHAR(100) NOT NULL,
data_cadastro VARCHAR(100) not null
) ENGINE = InnoDB;
-- INSERT INTO normalization.funcionario (funcionario_id,NOME,SOBRENOME,CONTATO,
--  telefone,data_cadastro )
-- VALUES
-- (1,	'Joseph',	'Rodrigues',	'jo@gmail.com',	'(35)998552-1445'	,
-- '2020-05-05 08:50:25'),
-- (2	,'André','Freeman',	'andre1990@gmail.com','(47)99522-4996'	,
-- '2020-02-05 00:00:00'),
-- (3,	,'Cíntia',	'Duval'	,'cindy@outlook.com'	,'(33)99855-4669'	,
-- '2020-05-05 10:55:35'),
-- (4,'Fernanda	','Mendes'	,'fernandamendes@yahoo.com'	,
-- '(33)99200-1556'	,'2020-05-05 11:45:40')
-- ;
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00');
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35');
    INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');
SELECT * FROM normalization.funcionario;

CREATE TABLE setor (
 setor_id INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100) NOT NULL
)  ENGINE = InnoDB;
INSERT INTO setor (nome) VALUES('Administração');
INSERT INTO setor (nome) VALUES('Vendas');
INSERT INTO setor (nome) VALUES('Operacional');
INSERT INTO setor (nome) VALUES('Estratégico');
INSERT INTO setor (nome) VALUES('Marketing');
SELECT * FROM setor;
CREATE TABLE funcionario_setor (
 funcionario_id INT NOT NULL,
        setor_id INT NOT NULL,
foreign key (funcionario_id) references funcionario(funcionario_id),
foreign key (setor_id) references setor(setor_id)
) ENGINE = InnoDB;
SELECT * FROM funcionario_setor;
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 1);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 2);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(13, 3);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 4);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 2);
    INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(15, 5);

