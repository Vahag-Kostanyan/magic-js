import express, { Router } from "express";
import { RouteAction, Middleware, RouteGroupOptions } from "./types";

export class RouterBuilder {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public get(uri: string, action: RouteAction, middleware: Middleware[] = []) {
        this.router.get(uri, ...middleware, ...(Array.isArray(action) ? action : [action]));
    }

    public post(uri: string, action: RouteAction, middleware: Middleware[] = []) {
        this.router.post(uri, ...middleware, ...(Array.isArray(action) ? action : [action]));
    }

    public put(uri: string, action: RouteAction, middleware: Middleware[] = []) {
        this.router.put(uri, ...middleware, ...(Array.isArray(action) ? action : [action]));
    }

    public patch(uri: string, action: RouteAction, middleware: Middleware[] = []) {
        this.router.patch(uri, ...middleware, ...(Array.isArray(action) ? action : [action]));
    }

    public delete(uri: string, action: RouteAction, middleware: Middleware[] = []) {
        this.router.delete(uri, ...middleware, ...(Array.isArray(action) ? action : [action]));
    }

    // Route group
    public group(options: RouteGroupOptions, callback: (router: RouterBuilder) => void) {
        const groupRouter = express.Router();
        const groupBuilder = new RouterBuilder();
        groupBuilder.router = groupRouter;

        callback(groupBuilder);

        const prefix = options.prefix || "";
        const middleware = options.middleware || [];

        this.router.use(prefix, ...middleware, groupRouter);
    }

    // Get Express router
    public getRouter(): Router {
        return this.router;
    }
}

export default new RouterBuilder();