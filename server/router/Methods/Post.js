const nodejieba = require("nodejieba")
exports = module.exports= async function (ctx) {    
    const req = ctx.request
    switch (req.url) {
        case '/login':
            login(req, ctx.response)            
	case '/fenci':
		fenci(req,ctx.response)        
default:
        break
    }
    return ctx.response
}

async function fenci(req,res){
	const result = nodejieba.cut(req.query['sentence'])
	res.body=result

}

async function login(req, res) {
     

}
