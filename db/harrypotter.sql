CREATE TABLE varinha(
id SERIAL PRIMARY KEY,
material VARCHAR(150) NOT NULL,
tamanho INT NOT NULL,
nucleo VARCHAR(150) NOT NULL,
data_fabricacao DATE NOT NULL
);

INSERT INTO varinha(material,tamanho,nucleo,data_fabricacao) VALUES ('Madeira de Teixo', 30, 'Pena de Fênix', '1991-07-31');

CREATE TABLE bruxos(
   id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    casa_hogwarts VARCHAR(50) NOT NULL,
    patrono VARCHAR(150) NOT NULL,
    habilidade VARCHAR(150) NOT NULL,
    status_sangue VARCHAR(50) NOT NULL,
    id_varinha INT NOT NULL,
    FOREIGN KEY (id_varinha) REFERENCES varinha(id)
);
INSERT INTO bruxos(nome,idade,casa_hogwarts,patrono,habilidade,status_sangue,id_varinha) VALUES ('Harry Potter', 11, 'Grifinória', 'Cervo','marca valdemort', 'Mestiço', 1);