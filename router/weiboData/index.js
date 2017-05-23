routers = require('koa-router'),
router = routers(), {stewpot} = require('../../util/')
router.get('/getWeiboData', async function (next) {
  const query = this.request.query
  console.log(query)
  this.response.body = await stewpot.findAndCountAll({limit: query.num, offset: query.pagenum})
})
module.exports = router
