const db = require('../config/connection');
const { User, AddSession } = require('../models');

const userSeeds = require('./userSeeds.json');
const AddSessionSeeds = require('./addSession.json');

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
    await AddSession.deleteMany({});
    await AddSession.create(AddSessionSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});



