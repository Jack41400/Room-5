const User = require('./User');
const Game = require('./Game');
const Post = require('./Post')

User.hasMany(Post, {
    foreignKey: 'message',
})

User.hasMany(Game, {
    foreignKey: 'message',
})

Post.belongsTo(User,{
    foreignKey: 'message',
});

module.exports = {User,Game,Post};