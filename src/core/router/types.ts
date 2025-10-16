import { RequestHandler, Router } from 'express';

type RouteAction = RequestHandler | RequestHandler[];
type Middleware = RequestHandler | RequestHandler[];

interface RouteGroupOptions {
  prefix?: string;
  middleware?: Middleware[];
}

export { RouteAction, Middleware, RouteGroupOptions, Router };