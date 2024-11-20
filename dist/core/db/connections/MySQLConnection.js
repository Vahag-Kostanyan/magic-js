"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _MySQLConnection_instance, _MySQLConnection_connection;
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
class MySQLConnection {
    constructor() {
        _MySQLConnection_connection.set(this, void 0);
        __classPrivateFieldSet(this, _MySQLConnection_connection, (0, mysql2_1.createConnection)({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        }), "f");
        __classPrivateFieldGet(this, _MySQLConnection_connection, "f").connect((err) => {
            if (err) {
                console.error('Database connection error:', err);
                throw new Error('Failed to connect to the database');
            }
            console.log('Database connected successfully');
        });
    }
    static get instance() {
        if (!__classPrivateFieldGet(_a, _a, "f", _MySQLConnection_instance))
            __classPrivateFieldSet(_a, _a, new _a(), "f", _MySQLConnection_instance);
        return __classPrivateFieldGet(_a, _a, "f", _MySQLConnection_instance);
    }
    getConnection() {
        return __classPrivateFieldGet(this, _MySQLConnection_connection, "f");
    }
}
_a = MySQLConnection, _MySQLConnection_connection = new WeakMap();
_MySQLConnection_instance = { value: void 0 };
exports.default = MySQLConnection;
