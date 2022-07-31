// Bring in sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a User class
class User extends Model {};

// Table restrictions
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        }
    }
}, 
// Connect table to sequelize and give specifications
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
});
4
// Export User class
module.exports = User;