import './configs'
import Model from './core/db/models/Model'

class migrations extends Model{
  tableName: string = 'migrations';
}


class Sessions extends Model{
  tableName: string = 'sessions';
}

let mode = new migrations();
let sessions = new Sessions();

mode.get();
sessions.get();