var express = require('express');
var router = express.Router();
const {
    find
} = require('../mongo/db')
/* GET users listing. */
router.get('/', async function (req, res, next) {
    let news = await find('NBA-player-turnovers')
    news = news.sort((a, b) => {
        return a.ranking * 1 - b.ranking * 1;
    })
    res.json({
        news
    });
    // console.log(news)
    // res.send(' with a resource');
});

module.exports = router; 