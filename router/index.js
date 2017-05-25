const routers = require('koa-router'),
 fenci = require('./fenci'),
weiboData=require('./weiboData')
    router = routers()

// routes表示的是路由的嵌套处理
router.use(fenci.routes()),
router.use(weiboData.routes())

module.exports=router
