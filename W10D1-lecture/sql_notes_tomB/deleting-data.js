const { Artist, sequelize } = require('./models/index');

async function deleteArtists() {
  await Artist.destroy({ // again we call this a 'where' clause
    where: {
      id: [4,5,6,7,8,9,10]
    }
  })

  sequelize.close();
}

deleteArtists();