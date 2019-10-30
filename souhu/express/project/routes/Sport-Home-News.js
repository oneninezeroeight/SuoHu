var express = require('express');
var router = express.Router();
const {
    find
} = require('../mongo/db')
/* GET users listing. */
router.get('/', async function (req, res, next) {
    let news = await find('Sport-Home-News')
    res.json({
        news
    });

});

module.exports = router;