const readline = require('readline');
const { Artist, sequelize } = require('./models/index');

async function insertNewArtist() {
  const artist = await Artist.create({
    name: "Aaron Brook",
    city: "Sacramento, CA"
  })

  // await readline.pause();

  artist.city = "San Francisco, CA";
  await artist.save();
  // await artist.destroy();

  sequelize.close();
}

insertNewArtist();