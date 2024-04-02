const db = require('../config/connection');
const { User, ManageSession } = require('../models');

const userSeeds = require('./userSeeds.json');
const manageSessionSeeds = require('./manageSession.json');

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
    await ManageSession.deleteMany({});
    await ManageSession.create(manageSessionSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});



