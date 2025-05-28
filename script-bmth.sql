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
values  ('Pray for Plagues', 8),
        ('For Stevie Wonders Eyes Only (Braille)', 8),
		('A Lot Like Vegas', 8),
		('Black & Blue', 8),
		('Liquor & Love Lost', 8),
		('(I Used to Make Out With) Medusa', 8),
		('Fifteen Fathoms, Counting', 8),
	    ('Off the Heezay', 8),
        ('Slow Dance', 8),
		('Can You Feel My Heart', 1),
	    ('The House of Wolves', 1),
    	('Empire (Let Them Sing)', 1),
		('Sleepwalking', 1),
		('Go to Hell, for Heavens Sake', 1),
		('Shadow Moses', 1),
		('And the Snakes Start to Sing', 1),
        ('Seen It All Before', 1),
        ('Antivist', 1),
        ('Crooked Young', 1), 
        ('Hospital for Souls', 1),
		('Blessed With a Curse', 6),
        ('The Fox and the Wolf', 6),
        ('Memorial', 6),
        ('Blacklist', 6),
        ('Visions', 6),
        ('Alligator Blood', 6),
        ('Home Sweet Hole', 6),
        ('Dont Go', 6),
        ('Fuck', 6),
		('It Never Ends', 6),
		('Anthem', 6),
		('Crucify Me', 6),
		('i apologise if you feel something', 2),
		('MANTRA', 2),
		('nihilist blues', 2),
		('in the dark', 2),
		('wonderful life', 2),
		('Ouch', 2),
		('medicine', 2),
        ('sugar honey ice & tea', 2),
        ('why you gotta kick me when im down?', 2),
		('fresh bruises', 2),
		('mother tongue', 2),
		('heavy metal', 2),
    	('(OST) Dreamseeker', 4),
        ('Youtopia', 4),
        ('Kool-Aid', 4),
        ('Top 10 Statues That Cried Blood', 4),
        ('Limousine', 4),
        ('Darkside', 4),
        ('A Bullet W/ My Name On', 4),
        ('OST) (Spi)ritua', 4),
        ('N/A', 4),
		('Lost', 4),
		('Strangers', 4),
		('R.I.P.', 4),
        ('Amen! ', 4),
        ('(OST) P.U.S.S.-E', 4),
        ('Die4U', 4),
        ('Dig It', 4),
		('Doomed', 5),
		('Happy Song', 5),
		('Throne', 5),
		('True Friends', 5),
		('Follow You', 5),
		('What You Need', 5),
		('Avalanche', 5),
		('Run', 5),
		('Drown', 5),
		('Blasphemy', 5),
		('The Comedown', 7),
        ('Chelsea Smile', 7),
        ('It Was Written In Blood', 7),
        ('Death Breath', 7),
        ('Football Season Is Over', 7),
        ('Sleep With One Eye Open', 7),
        ('Diamonds Arent Forever', 7),
        ('The Sadness Will Never End', 7),
        ('No Need For Introductions, Ive Read About Girls Like You On The Backs Of Toilet Doors', 7),
		('Dear Diary,', 3),
        ('Parasite Eve', 3),
        ('Teardrops', 3),
        ('Obey', 3),
        ('Itch for the Cure (When Will We Be Free?)', 3),
        ('Kingslayer', 3),
        ('1x1', 3),
        ('Ludens', 3),
        ('One Day the Only Butterflies Left Will Be in Your Chest as You March Towards Your Death', 3);

        select 
        m.titulo, a.titulo as nome_album
        from musica m 
        inner join album a
        on m.fkAlbum = a.id;
        
        
       
	
		
      
        
        
        