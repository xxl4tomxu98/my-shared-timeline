const { Cat, Toy, CatToy } = require('./models');
const {Op} = require('sequelize');

async function findCatId() {
  // Find the catId that owns Box
  const toy = await Toy.findOne({
    where: {
      name : 'Box'
    },
    include:  Cat
  })
  //console.log(JSON.stringify(cat, null, 2));
  console.log(toy.Cats);
  return toy.Cats;
};

//findCatId();


async function findToyId(){
  const cat = await Cat.findOne({
    where: {name: 'Rocky'},
    include: Toy
  })

  console.log(JSON.stringify(cat.Toys, null, 2));

};


//findToyId();



async function findOwnerName(){
  const toys = await Toy.findAll({
    include: Cat
  })
  for (let toy of toys){
    console.log(toy.Cats);
  }
};

findOwnerName();
