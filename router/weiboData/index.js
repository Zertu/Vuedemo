 routers = require('koa-router'),
    router = routers()
 router.get('/getWeiboData',async function (next) { 
	 const query=this.request.query
	 this.response.body='fuckyou'
  })
module.exports = router
