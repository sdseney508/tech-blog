const User = require('./User');
const Blog = require('./blog');
const BlogComment = require('./blogcomment');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(BlogComment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

BlogComment.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

BlogComment.belongsTo(Blog, {
  foreignKey: 'blog_id'
});

Blog.hasMany(BlogComment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
})

module.exports = { User, Blog, BlogComment };
