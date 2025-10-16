import { RequestHandler } from "express";
import RouterBuilder from "./core/router/RouterBuilder";

const logMiddleware: RequestHandler = (req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
};

RouterBuilder.get("/", (req, res) => { res.send("Welcom magicJs framework"); });

RouterBuilder.group({ prefix: "/api", middleware: [logMiddleware] }, (router) => {
    router.group({ prefix: "/api", middleware: [logMiddleware] }, (router) => {
        router.get("/users", (req, res) => { res.json([{ id: 1, name: "John" }]); });
    });
    router.post("/users", (req, res) => { });
});

export default RouterBuilder.getRouter();