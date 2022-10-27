const User = require('./User');
const Game = require('./Game');
const Post = require('./Post')

User.hasMany(Post, Game, {
    foreignKey: 'message',
})

Post.belongsTo(User,{
    foreignKey: 'message',
});

module.exports = {User,Game,Post};