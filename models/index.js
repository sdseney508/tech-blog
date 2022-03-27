const User = require('./User');
const Blog = require('./Blog');
const BlogComments = require('./blogcomments');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(BlogComments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

BlogComments.belongsTo(Blog, {
  foreignKey: 'blog_id'
});

Blog.hasMany(BlogComments, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
})

module.exports = { User, Blog, BlogComments };
