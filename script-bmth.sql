create database BMTH;
use BMTH;

create table usuario (
id  int primary key not null auto_increment,
username        varchar(20) not null unique,
email           varchar(30) not null unique,
senha           varchar(15) not null
);

create table album (
id int primary key not null auto_increment,
titulo varchar(90) not null unique,
genero varchar(20) not null,
lancamento date not null);

create table musica (
id int primary key not null auto_increment,
titulo varchar(120) not null unique,
fkAlbum int,
foreign key (fkAlbum) references album(id)
);

create table votos (
id int primary key not null auto_increment,
fkAlbumFavorito int,
fkMusicaFavorita int,
fkUsuario int not null,
foreign key (fkAlbumFavorito) references album(id), 
foreign key (fkMusicaFavorita) references musica(id),
foreign key (fkUsuario) references usuario(id));

insert into album (titulo, genero, lancamento)
values ('Sempiternal', 'Metalcore' , '2013-04-01'),
	   ('Amo', 'Pop Rock', '2019-01-25'),
       ('Post Human: Survival Horror', 'Metalcore', '2020-10-30'),
       ('Post Human: NeX GEn', ', Synthpop', '2024-05-24'),
       ('Thats The Spirit', 'Rock alternativo', '2015-08-11'),
	   ('There Is a Hell Believe Me Ive Seen It. There Is a Heaven Lets Keep It a Secret', 'Metalcore', '2010-10-04'),
       ('Suicide Season', 'Deathcore', '2008-09-29'),
       ('Count Your Blessings', 'Deathcore', '2006-10-30');
       
desc musica;
insert into musica (titulo, fkAlbum)
values  ('Can You Feel My Heart', 1),
	    ('Sleepwalking', 1),
		('Go to Hell, for Heavens Sake', 1),
		('Shadow Moses', 1),
		('Blessed With a Curse', 6),
        ('Teardrops', 3),
		('MANTRA', 2),
        ('Kool-Aid', 4),
		('Doomed', 5),
		('Throne', 5),
		('Drown', 5),
        ('Pray For Plagues', 5);

        select 
        m.titulo, a.titulo as nome_album
        from musica m 
        inner join album a
        on m.fkAlbum = a.id;
        
        select * from votos;
        