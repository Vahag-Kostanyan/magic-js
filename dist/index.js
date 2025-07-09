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
require("./configs");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // let migrations = await Users.find().where({column: 'id', action: '>', value: '2' }).orderBy({column: 'name', value: "ASC"}).orderBy({column: 'id', value: "DESC"}).getQuery();
        // console.log(await Users.delete(1));
        // console.log(await Users.findById(1));
    });
}
main();
