
var express = require('express');
var router = express.Router();
var Fifa = require('../controllers/fifa');

router.get('/player', async function(req, res, next) {
    console.log("1")
    var dados = await Fifa.listPlayer();
    res.jsonp(dados);
});

router.get('/player/:id/2019', async function(req, res, next) {
    console.log("3")
    var dados = await Fifa.infoPlayerYear(req.params.id, 2019);
    res.jsonp(dados);
});

router.get('/player/:id/2018', async function(req, res, next) {
    console.log("4")
    var dados = await Fifa.infoPlayerYear(req.params.id, 2018);
    res.jsonp(dados);
});

router.get('/player/:id', async function(req, res, next) {
    console.log("2")
    var dados = await Fifa.infoPlayer(req.params.id);
    res.jsonp(dados);
});

//- ----------------ATORES--------------------

router.get('/club', async function(req, res, next) {
    console.log("5")
    var dados = await Fifa.listClub()
    res.jsonp(dados);
});

router.get('/club/:id', async function(req, res, next) {
    console.log("6")
    var dados = await  Fifa.infoClub(req.params.id)
    res.jsonp(dados);
});

router.get('/club/:id/2019', async function(req, res, next) {
    console.log("7")
    var dados = await Fifa.infoClubYear(req.params.id, 2019);
    res.jsonp(dados);
});

router.get('/club/:id/2018', async function(req, res, next) {
    console.log("8")
    var dados = await Fifa.infoClubYear(req.params.id, 2018);
    res.jsonp(dados);
});

//-------------------------GÉNEROS----------------------------------

router.get('/nationality', async function(req, res, next) {
    console.log("9")
    var dados = await Fifa.listNationality();
    res.jsonp(dados);
});

router.get('/nationality/:id', async function(req, res, next) {
    console.log("10")
    var dados = await Fifa.infoNationality(req.params.id);
    res.jsonp(dados);
});

module.exports = router;
