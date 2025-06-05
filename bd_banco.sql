Create database bd_banco;
use bd_banco;

create table tb_usuario(
id_usuario int primary key auto_increment,
nm_usuario varchar(50) not null,
nm_senha varchar(50) not null,
nm_email varchar(14) not null,
nr_fone varchar(20)
);
select * from tb_usuario;