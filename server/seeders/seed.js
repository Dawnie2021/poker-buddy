const db = require('../config/connection');
const { User, Session } = require('../models');

const userSeeds = require('./userSeeds.json');
const SessionSeeds = require('./session.json');

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
    await Session.deleteMany({});
    await Session.create(SessionSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});



