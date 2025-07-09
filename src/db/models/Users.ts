import Model from "../../core/db/models/Model";

class Users extends Model {
  tableName: string = 'users';
  
  static find() {
    return new this().find();
  }

  static async findById(id: number){
    return new this().findById(id);
  }

  static async delete(id: number){
    return new this().delete(id);
  }
}

export default Users;