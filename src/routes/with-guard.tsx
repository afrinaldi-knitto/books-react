import type { FC, JSX } from "react";
import type { IRouter } from "../types/router";

export const withGuard = (
  routes: IRouter[],
  Guard: FC<{ children: JSX.Element }>
): IRouter[] =>
  routes.map((route) => ({
    ...route,
    element: <Guard>{route.element}</Guard>,
    children: route.children ? withGuard(route.children, Guard) : undefined,
  }));
