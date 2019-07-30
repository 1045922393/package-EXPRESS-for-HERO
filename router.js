const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/index.html', function (req, res) {
    controller.getAllhero((arr) => {
        res.render('index', { array: arr })
    })
})
router.get('/add.html', function (req, res) {
    res.render('add', {});
})
router.post('/addHero', function (req, res) {
    controller.addHero(req, res)
})
router.get('/delHero', function (req, res) {
    controller.delHero(req, res);
})
module.exports = router;