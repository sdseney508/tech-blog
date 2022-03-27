const sequelize = require('../config/connection');
const { User, Blog, BlogComments } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const blogCommentsData = require('./blogCommentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const blogcomments = await BlogComments.bulkCreate(blogCommentsData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();