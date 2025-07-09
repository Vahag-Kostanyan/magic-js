import './configs'
import Users from './db/models/Users';

async function main (){ 
  let query = await Users.find().where({column: 'id', action: '>', value: '2' }).orderBy({column: 'name', value: "ASC"}).orderBy({column: 'id', value: "DESC"}).getQuery();
  console.log(query);
  console.log(await Users.findById(1));
}

main();