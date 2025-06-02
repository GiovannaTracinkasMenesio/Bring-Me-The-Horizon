var express = require("express");
var router = express.Router();

var votosController = require("../controllers/votosController");

router.get("/album", function (req, res) {
    votosController.buscarAlbum(req, res);
});

router.get("/musicas", function (req, res) {
    votosController.buscarMusica(req, res);
});
router.post("/votar", function (req, res) {
    votosController.votar(req, res);
});
router.get("/musicaMaisVotada", function (req, res) {
    votosController.kpiMusica(req, res);
});
router.get("/albumMaisVotado", function (req, res) {
    votosController.kpiAlbum(req, res);
});


module.exports = router;