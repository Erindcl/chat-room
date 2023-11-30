const Sequelize = require("sequelize")

const db = {}
const sequelize = new Sequelize(
  'chatroom',
  'root',
  '123456',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)
db.message = require("./messageModel.js")(sequelize)
db.user = require("./userModel.js")(sequelize)
db.sequelize = sequelize

module.exports = db
