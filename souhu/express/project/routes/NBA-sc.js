var express = require('express');
var router = express.Router();
const {
    find
} = require('../mongo/db')
/* GET users listing. */
router.get('/', async function (req, res, next) {
    let news = await find('NBA-race-card')
    res.json({
        news
    });

});

module.exports = router;