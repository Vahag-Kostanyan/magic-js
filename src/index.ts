import './configs'
import Users from './db/models/Users';
import router from './router';
import SignUpValidation from './validations/SignUpValidation';
import express from 'express';
const app = express();

async function main() {
  let query = await Users.find().where({ column: 'id', action: '>', value: '2' }).orderBy({ column: 'name', value: "ASC" }).orderBy({ column: 'id', value: "DESC" }).getQuery();
  console.log(query);
  console.log(await Users.findById(1));

  let data = {
    name: "John Doe",
    email: "",
    password: "12345",
    phone: "+37498195868"
  }

  let validation = new SignUpValidation(data);

  if (!validation.validate()) {
    console.log(validation.getErrors());
  }


  app.use(router);
  app.listen(3000, () => console.log('Server running on port 3000'));

}

main();