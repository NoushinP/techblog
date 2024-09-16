const sequelize = require('../config/connection');
const { Post } = require('../models');
const postData = require('./postData.json');

const seedDatabase = async () => {

try {
  await sequelize.sync({ force: true });

  for (const post of postData) {
    await Post.create({
      ...post,
    });
  }

  process.exit(0);
} catch (err) {
    console.error('Failed to seed database:', err);
    process.exit(1);
}
};

seedDatabase();
