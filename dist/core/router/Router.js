"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RouterBuilder {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    get(uri, action) { return this.router.get(uri, action); }
    post(uri, action) { return this.router.post(uri, action); }
    put(uri, action) { return this.router.put(uri, action); }
    patch(uri, action) { return this.router.patch(uri, action); }
    delete(uri, action) { return this.router.delete(uri, action); }
}
exports.default = new RouterBuilder();
