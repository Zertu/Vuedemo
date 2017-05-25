const nodejieba = require("nodejieba"),
    routers = require('koa-router'),
    topN = 4,
    router = routers()
router.post('/fenci', function (next) {
    const res = this.response,
        req = this.requset
	console.log(req)
    res.body = nodejieba.extract(req.body['sentence'], topN)
})
module.exports = router
