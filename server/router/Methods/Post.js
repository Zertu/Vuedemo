const nodejieba = require("nodejieba")
exports = module.exports = async function (ctx) {
    const req = ctx.request,
        res = ctx.response
    switch (req.url) {
        case '/login':
            login(req, res)
        case '/fenci':
            fenci(req, res)
        default:
            break
    }
    return ctx.response
}

async function fenci(req, res) {
    console.log(req)
    const result = nodejieba.cut(req.query['sentence'])
    res.body = result

}

async function login(req, res) {}