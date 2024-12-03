"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
class MySQLConnection {
    constructor() {
        this.connection = null;
        this.pool = (0, promise_1.createPool)({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            waitForConnections: true,
        });
    }
    static getInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!MySQLConnection.instance)
                MySQLConnection.instance = new MySQLConnection();
            return MySQLConnection.instance;
        });
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.pool)
                throw new Error("Connection pool is not initialized.");
            if (!this.connection)
                this.connection = yield this.pool.getConnection();
            return this.connection;
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.pool) {
                yield this.pool.end();
                this.pool = null;
            }
        });
    }
}
exports.default = MySQLConnection;
