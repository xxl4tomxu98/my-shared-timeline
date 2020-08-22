const { Artwork, Collector, ArtworkCollector, sequelize } = require('./models/index');

async function insertNewArtwork() {
  const artwork = await Artwork.create({
    title: "Dancing Figure",
    year: 1971,
    artistId: 2
  })

  const collector = await Collector.create({
    name: "Robert Mondavi",
    city: "Napa, CA"
  })

  await  artwork.addCollector(collector);
  // await  collector.addArtwork(artwork);

  sequelize.close();
}

insertNewArtwork();