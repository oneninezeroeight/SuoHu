var express = require('express');
var router = express.Router();
const {
    find
} = require('../mongo/db')
/* GET users listing. */
router.get('/', async function (req, res, next) {
    let news = await find('NBA-Dblm')
    news = news.sort((a, b) => {
        return a.place * 1 - b.place * 1;
    })
    res.json({
        news
    });

});

module.exports = router;