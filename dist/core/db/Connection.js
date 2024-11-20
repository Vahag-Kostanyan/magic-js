var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _DBConnection_instance, _DBConnection_connection;
import { createConnection } from 'mysql2';
class DBConnection {
    constructor() {
        _DBConnection_connection.set(this, void 0);
        __classPrivateFieldSet(this, _DBConnection_connection, createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        }), "f");
    }
    static get instance() {
        if (!_a.instance)
            __classPrivateFieldSet(_a, _a, new _a(), "f", _DBConnection_instance);
        return _a.instance;
    }
    getConnection() {
        return this.connection;
    }
}
_a = DBConnection, _DBConnection_connection = new WeakMap();
_DBConnection_instance = { value: void 0 };
//# sourceMappingURL=Connection.js.map