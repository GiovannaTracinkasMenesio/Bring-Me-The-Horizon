var express = require("express");
var router = express.Router();

var votosController = require("../controllers/votosController");

router.get("/ultimas", function (req, res) {
    votosController.buscarAlbum(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    votosController.buscarMusica(req, res);
})

module.exports = router;