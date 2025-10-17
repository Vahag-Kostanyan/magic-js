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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MySQLConnection_1 = __importDefault(require("../connections/MySQLConnection"));
const QueryBuilder_1 = __importDefault(require("./query/QueryBuilder"));
class Model {
    constructor() {
        this.connection = null;
        this.queryBuilder = new QueryBuilder_1.default();
    }
    initializeConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connection) {
                this.queryBuilder.setTableName(this.tableName);
                const dbInstance = yield MySQLConnection_1.default.getInstance();
                this.connection = yield dbInstance.getConnection();
            }
        });
    }
    find() {
        this.queryBuilder.setTableName(this.tableName);
        return this.queryBuilder;
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initializeConnection();
            return yield this.queryBuilder.setTableName(this.tableName).where({ column: 'id', action: '=', value: id }).one();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield this.initializeConnection();
            (_a = this.connection) === null || _a === void 0 ? void 0 : _a.query(`DELETE FROM ${this.tableName} WHERE id = ${id}`);
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initializeConnection();
            const columns = Object.keys(data).join(', ');
            const placeholders = Object.keys(data).map(() => '?').join(', ');
            const values = Object.values(data);
            const [result] = yield this.connection.query(`INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders})`, values);
            return result;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initializeConnection();
            const setString = Object.keys(data).map(key => `${key} = ?`).join(', ');
            const values = [...Object.values(data), id];
            const [result] = yield this.connection.query(`UPDATE ${this.tableName} SET ${setString} WHERE id = ?`, values);
            return result;
        });
    }
    static find() {
        return (new this()).find();
    }
    static findById(id) {
        return (new this()).findById(id);
    }
    static delete(id) {
        return (new this()).delete(id);
    }
    static create(data) {
        return (new this()).create(data);
    }
    static update(id, data) {
        return (new this()).update(id, data);
    }
}
exports.default = Model;
