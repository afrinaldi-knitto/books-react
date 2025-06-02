import type { IRouter } from "../types/router";
import authRoutes from "./auth-routes";
import userRoutes from "./user-routes";

const allRoutes: IRouter[] = [...authRoutes, ...userRoutes];

export default allRoutes;
