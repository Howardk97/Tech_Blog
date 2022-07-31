// Bring in User and Post classes
const User = require('./User');
const Post = require('./Post');

// One user has many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
});

// Each post belongs to the user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// Export User and Post class
module.exports = { User, Post };