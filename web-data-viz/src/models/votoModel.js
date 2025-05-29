var database = require("../database/config");

function buscarAlbum() {

    var instrucaoSql = `SELECT
        a.titulo AS Album_Favorito,
        COUNT(v.fkAlbumFavorito) as votos
        FROM votos v
        INNER JOIN album a 
        ON v.fkAlbumFavorito = a.id
        GROUP BY a.titulo
        ORDER BY votos DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMusica() {

    var instrucaoSql = `  SELECT
        m.titulo AS Musica_Favorita,
        COUNT(v.fkMusicaFavorita) as votos
        FROM votos v
        INNER JOIN musica m
        ON v.fkMusicaFavorita = m.id
        GROUP BY m.titulo
        ORDER BY votos DESC`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarAlbum,
    buscarMusica
}
