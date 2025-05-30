var votoModel = require("../models/votoModel");

function buscarAlbum(req, res) {


    console.log(`Buscando álbum favorito`);

    votoModel.buscarAlbum().then(function (resultado) {
        console.log(resultado,"AQUI")
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

    var idAquario = req.params.idAquario;

    console.log(`Buscando música favorita`);

    votoModel.buscarMusica(idAquario).then(function (resultado) {
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

module.exports = {
    buscarAlbum,
    buscarMusica

}