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
function votar(album, musica, usuario) {
    const instrucaoSql = `
        INSERT INTO votos (fkAlbumFavorito, fkMusicaFavorita, fkUsuario)
        VALUES (${album}, ${musica}, ${usuario});
    `;

    console.log("Executando SQL de VOTO: ", instrucaoSql);
    return database.executar(instrucaoSql);
}
function musicaMaisVotada() {
    const sql = `
        SELECT m.titulo AS musica_mais_votada, COUNT(v.fkMusicaFavorita) AS total_votos
        FROM votos v
        JOIN musica m ON v.fkMusicaFavorita = m.id
        GROUP BY m.titulo
        ORDER BY total_votos DESC
        LIMIT 1;
    `;
    return database.executar(sql);
}

function albumMaisVotado() {
    const sql = `
        SELECT a.titulo AS album_mais_votado, COUNT(v.fkAlbumFavorito) AS total_votos
        FROM votos v
        JOIN album a ON v.fkAlbumFavorito = a.id
        GROUP BY a.titulo
        ORDER BY total_votos DESC
        LIMIT 1;
    `;
    return database.executar(sql);
}

module.exports = {
    buscarAlbum,
    buscarMusica,
    votar,
    albumMaisVotado,
    musicaMaisVotada
}
