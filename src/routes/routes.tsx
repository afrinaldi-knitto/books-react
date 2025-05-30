import type { IRouter } from "../types/router";
import authRoutes from "./auth-routes";

const allRoutes: IRouter[] = [...authRoutes];

export default allRoutes;
