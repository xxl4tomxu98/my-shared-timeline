const { Artwork, sequelize } = require('./models/index');

async function insertNewArtwork() {
 const artwork = Artwork.build({
  title: "Bathers",
  year: 1977,
  artistId: 2
 })

 await artwork.save();

 sequelize.close();
}

insertNewArtwork();