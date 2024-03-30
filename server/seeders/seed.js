const db = require('../config/connection');
const { User, ManageSessions } = require('../models');

const userSeeds = require('./userSeeds.json');
const manageSessionsSeeds = require('./manageSessions.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});

db.once('open', async () => {
  try {
    await ManageSessions.deleteMany({});
    await ManageSessions.create(manageSessionsSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});