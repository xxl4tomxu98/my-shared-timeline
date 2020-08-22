const { Pool } = require("pg");
const allPuppiesSql = `
SELECT id, name, age_yrs, breed, weight_lbs, microchipped FROM puppies;
`;

const pool = new Pool ({
    database: 'postgres',
    user: "tom",
    password: "Luoxiang11$"
});

async function selectAllPuppies(){
  try{
    const results = await pool.query(allPuppiesSql);
    console.log(results.rows);
    //pool.end();
  } catch(e){
    console.error(e);
  }
}

selectAllPuppies();


const singlePuppySql = `
SELECT id, name, age_yrs, breed, weight_lbs, microchipped FROM puppies WHERE ID = $1;
`;

async function selectOnePuppy(puppyId){
  try{
    const results = await pool.query(singlePuppySql, [puppyId]);
    console.log(results.rows);
    pool.end();
  } catch(e){
    console.error(e);
  }

}

const id = Number.parseInt(process.argv[2]);
selectOnePuppy(id);
