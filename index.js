const koa = require('koa')
,app=new koa()
	,bodyParser = require('koa-bodyparser'),
	cors = require('koa-cors')
	router = require('./router')
app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.on('error', (err, ctx) =>
		console.error('server error', err, ctx.request)
      );

app.listen(3001,function(){
	console.log('server open at 139.224.232.97:3001')
})
