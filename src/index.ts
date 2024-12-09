import './configs'
import Model from './core/db/models/Model'

class migrations extends Model{
  tableName: string = 'migrations';
}

let migration = new migrations();

async function main (){ 
  let migrations = await migration.find().where({ column: 'id', action: '=', value: '1'}).getQuery();
}

main();