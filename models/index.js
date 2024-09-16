const Post = require('./Post');
const Comment = require('./Comment');

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

module.exports = {
  Post,
  Comment,
};
