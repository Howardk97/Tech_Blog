// Bring in sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Post class
class Post extends Model {};

// Make restrictions for Post table
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    text: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id',
        }
    },
}, 
// Connect to sequelize and give specifications
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post'
});

// Export Post class
module.exports = Post;