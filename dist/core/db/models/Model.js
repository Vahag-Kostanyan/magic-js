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
        // static async findById()
        // {
        // }
        // static async create()
        // {
        // }
        // static async update()
        // {
        // }
        // static async delete()
        // {
        // }
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
}
exports.default = Model;
