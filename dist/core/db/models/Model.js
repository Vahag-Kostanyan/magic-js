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
class Model {
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const sql = `SELECT * FROM ${this.tableName}`;
            const [rows] = yield ((_a = this.connection) === null || _a === void 0 ? void 0 : _a.execute(sql));
            (_b = this.connection) === null || _b === void 0 ? void 0 : _b.end();
        });
    }
    static findById() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static update() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static delete() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
Model.connection = MySQLConnection_1.default.instance.getConnection();
