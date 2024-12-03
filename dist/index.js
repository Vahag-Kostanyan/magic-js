"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./configs");
const Model_1 = __importDefault(require("./core/db/models/Model"));
class migrations extends Model_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'migrations';
    }
}
class Sessions extends Model_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'sessions';
    }
}
let mode = new migrations();
let sessions = new Sessions();
mode.get();
sessions.get();
