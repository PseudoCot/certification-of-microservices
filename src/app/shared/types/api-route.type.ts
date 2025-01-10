import { ApiRoutes } from './../consts';
import { ValueOf } from "./value-of.type";

export type ApiRoute = ValueOf<typeof ApiRoutes>;
