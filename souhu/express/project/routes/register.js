var express = require('express');
var router = express.Router();
const {
    insert,
    find
} = require('../mongo/db')

router.get("/", async function (req, res, next) {
    let user = req.query.nbauser;
    let data = await find('ZC',{
        nbauser:user*1
    });
    let str = "注册失败，此手机号码已存在"
    if (data.length==0) {
        insert('ZC', [{
            nbauser: user*1,
            msg: 12345
        }])
        str = "注册成功"
    }
    res.json({
     str,
     data
    })
});

module.exports = router;