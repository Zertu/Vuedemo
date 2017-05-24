const Sequelize = require('sequelize'),
sequelize=require('../../model')
const beef = sequelize.define('beef', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  weibo_id: Sequelize.STRING,
  weibo_cont: Sequelize.STRING,
  repost_num: Sequelize.INTEGER,
  comment_num: Sequelize.INTEGER,
  praise_num: Sequelize.INTEGER,
  uid: Sequelize.STRING,
  is_origin: Sequelize.INTEGER,
  device: Sequelize.STRING,
  weibo_url: Sequelize.STRING,
  create_time: Sequelize.STRING,
  comment_crawled: Sequelize.INTEGER,
  repost_crawled: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }

}, {
  timestamps: false,
   freezeTableName: true,
})

module.exports=beef