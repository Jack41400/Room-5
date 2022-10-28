const User = require('./User');
const Game = require('./Game');
const Post = require('./Post')

User.hasMany(Game, {
    foreignKey: 'message',
});

User.hasMany(Post, {
    foreignKey: 'user_post',
});

Post.belongsTo(User,{
    foreignKey: 'message',
});

module.exports = {User,Game,Post};
