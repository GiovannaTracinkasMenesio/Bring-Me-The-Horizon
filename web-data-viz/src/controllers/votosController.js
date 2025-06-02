var votoModel = require("../models/votoModel");

function buscarAlbum(req, res) {

    console.log(`Buscando álbum favorito`);

    votoModel.buscarAlbum().then(function (resultado) {
        console.log(resultado)
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Erro ao buscar álbum favorito:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMusica(req, res) {

    console.log(`Buscando música favorita`);

    votoModel.buscarMusica().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Erro ao buscar música favorita:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function votar(req, res) {
    const {album, musica, usuario } = req.body;

    if (!album || !musica || !usuario) {
        return res.status(400).send("Dados incompletos");
    }

    votoModel.votar(album, musica, usuario)
        .then(() => res.status(200).send("Voto registrado com sucesso"))
        .catch(erro => {
            console.error("Erro ao registrar voto:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
function kpiMusica(req, res) {
    votoModel.musicaMaisVotada()
        .then(resultado => {
            res.json(resultado[0]); 
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).send("Erro ao buscar música mais votada");
        });
}

function kpiAlbum(req, res) {
    votoModel.albumMaisVotado()
        .then(resultado => {
            res.json(resultado[0]); 
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).send("Erro ao buscar álbum mais votado");
        });
}

module.exports = {
    buscarAlbum,
    buscarMusica,
    votar,
    kpiAlbum,
    kpiMusica
}