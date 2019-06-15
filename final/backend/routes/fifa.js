
var express = require('express');
var router = express.Router();
var Fifa = require('../controllers/fifa');




router.get('/player', async function(req, res, next) {
    console.log("1")

    var dados = await Fifa.listPlayer();
    res.jsonp(dados);
});

router.get('/player/:group/:year/:id', async function(req, res, next) {

    var dados = ""

    if (req.params.group == "pace") {
        // console.log("pace")
        dados = await Fifa.seasonPace(req.params.id,req.params.year);
    } else if (req.params.group == "shooting") {
        // console.log("shooting")
        dados = await Fifa.seasonShooting(req.params.id,req.params.year);
    } else if (req.params.group == "passing") {
        // console.log("passing")
        dados = await Fifa.seasonPassing(req.params.id,req.params.year);       
    } else if (req.params.group == "dribbling") {
        // console.log("dribbling")
        dados = await Fifa.seasonDribbling(req.params.id,req.params.year);      
    } else if (req.params.group == "defense") {
        // console.log("defense")
        dados = await Fifa.seasonDefense(req.params.id,req.params.year);     
    } else if (req.params.group == "physical") {
        // console.log("physical")
        dados = await Fifa.seasonPhysical(req.params.id,req.params.year);    
    } else if (req.params.group == "position") {
        // console.log("position")  
        dados = await Fifa.seasonPosition(req.params.id,req.params.year);    
    } else if (req.params.group == "status") {
        // console.log("status")  
        dados = await Fifa.seasonStatus(req.params.id,req.params.year);
    } // else if (req.params.year == "pace") {
    //     var dados = await Fifa.seasonPosition(req.params.id,req.params.year);
    // } else if (req.params.year == "pace") {
    //     var dados = await Fifa.seasonPosition(req.params.id,req.params.year);
    // } else if (req.params.year == "pace") {





    res.jsonp(dados);
});

// router.get('/player/2018/:id', async function(req, res, next) {
//     var dados = await Fifa.infoPlayerYear(req.params.id, 2018);
//     res.jsonp(dados);
// });

// router.get('/player/2019/:id', async function(req, res, next) {
//     var dados = await Fifa.infoPlayerYear(req.params.id, 2019);
//     res.jsonp(dados);
// });

router.get('/player/:id', async function(req, res, next) {
    var dados = await Fifa.player(req.params.id);
    res.jsonp(dados);
});





router.get('/position/:year/:id', async function(req, res, next) {
    var dados = await Fifa.seasonPosition(req.params.id,req.params.year);
    res.jsonp(dados);
});





router.get('/club', async function(req, res, next) {
    var dados = await Fifa.listClub()
    res.jsonp(dados);
});

// router.get('/club/:id', async function(req, res, next) {
//     var dados = await  Fifa.club(req.params.id)
//     res.jsonp(dados);
// });

router.get('/club/2018/:id', async function(req, res, next) {
    var dados = await Fifa.clubYear(req.params.id, 2018);
    res.jsonp(dados);
});

router.get('/club/2019/:id', async function(req, res, next) {
    var dados = await Fifa.clubYear(req.params.id, 2019);
    res.jsonp(dados);
});

router.get('/club/info/:id', async function(req, res, next) {
    var dados = await Fifa.infoClub(req.params.id);
    res.jsonp(dados);
});






router.get('/nationality', async function(req, res, next) {
    var dados = await Fifa.listNationality();
    res.jsonp(dados);
});

router.get('/nationality/:id', async function(req, res, next) {
    var dados = await Fifa.nationality(req.params.id);
    res.jsonp(dados);
});

router.get('/nationality/info/:id', async function(req, res, next) {
    var dados = await Fifa.infoNationality(req.params.id);
    res.jsonp(dados);
});

module.exports = router;
