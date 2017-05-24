const routers = require('koa-router'),
router = routers(), {stewpot,eleme,beef} = require('../../util/')
,sequelize = require('sequelize')
router.get('/stewpot', async function (next) {
  const query = this.request.query,
  pageSize=query.num-0,
  idx=query.pagenum-0
  this.response.body = await stewpot.findAndCountAll({limit: pageSize , offset:idx*pageSize+pageSize})
})
router.get('/stewpotall',async function (next) { 
  this.response.body = await stewpot.findAll({attributes:[[sequelize.fn('DATE_FORMAT', sequelize.col('create_time'),'%Y%m%d'), 'days'],[sequelize.fn('count','*'),'count']],group:'days'})
 })
 router.get('/elemeall',async function (next) { 
  this.response.body = await eleme.findAll({attributes:[[sequelize.fn('DATE_FORMAT', sequelize.col('create_time'),'%Y%m%d'), 'days'],[sequelize.fn('count','*'),'count']],group:'days'})
 })
 router.get('/beefall',async function (next) { 
     const group = await beef.findAll({attributes:[[sequelize.fn('DATE_FORMAT', sequelize.col('create_time'),'%Y%m%d'), 'days'],[sequelize.fn('count','*'),'count']],group:'days'})
     data=await beef.findAll({order:[['create_time', 'asc']]})
     this.response.body=[group,data]
 })
router.get('/eleme', async function (next) {
  const query = this.request.query,
  pageSize=query.num-0,
  idx=query.pagenum-0
  this.response.body = await eleme.findAndCountAll({limit: pageSize , offset:idx*pageSize+pageSize,order:['create_time', 'asc']})
})
router.get('/beef', async function (next) {
  const query = this.request.query,
  pageSize=query.num-0,
  idx=query.pagenum-0
  this.response.body = await beef.findAndCountAll({limit: pageSize , offset:idx*pageSize+pageSize,order:['create_time', 'asc']})
})
module.exports = router
