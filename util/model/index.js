const Sequelize = require('Sequelize')
const sequelize = new Sequelize('weibo', 'zhang', 'sbblog', {
    host: '139.224.232.97',
    dialect: 'mysql',
    pool: {
        max: 50,
        min: 0,
        idle: 10000
    }
})

module.exports=sequelize