const { DataTypes } = require('sequelize');
module.exports = function (sequelize) {
    const Message = sequelize.define('messages', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fromUserId: {
            type: DataTypes.INTEGER
        },
        toUserId: {
            type: DataTypes.INTEGER
        },
        content: {
            type: DataTypes.STRING
        }
    })
    return Message
}