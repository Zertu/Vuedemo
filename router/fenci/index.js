const nodejieba = require("nodejieba"),
    routers = require('koa-router'),
    topN = 4,
    router = routers()
router.post('/fenci', function (next) {
    	this.response.body = nodejieba.extract(this.request.body['sentence'], topN)
})
module.exports = router
