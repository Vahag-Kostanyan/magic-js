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
require("./configs");
const Users_1 = __importDefault(require("./db/models/Users"));
const router_1 = __importDefault(require("./router"));
const SignUpValidation_1 = __importDefault(require("./validations/SignUpValidation"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let query = yield Users_1.default.find().where({ column: 'id', action: '>', value: '2' }).orderBy({ column: 'name', value: "ASC" }).orderBy({ column: 'id', value: "DESC" }).getQuery();
        console.log(query);
        console.log(yield Users_1.default.findById(1));
        let data = {
            name: "John Doe",
            email: "",
            password: "12345",
            phone: "+37498195868"
        };
        let validation = new SignUpValidation_1.default(data);
        if (!validation.validate()) {
            console.log(validation.getErrors());
        }
        app.use(router_1.default);
        app.listen(3000, () => console.log('Server running on port 3000'));
    });
}
main();
