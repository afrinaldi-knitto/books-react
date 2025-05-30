import { Route, Routes } from "react-router";
import allRoutes from "./routes";
import type { IRouter } from "../types/router";

const renderRoutes = (routes: IRouter[]) => {
  return routes.map(({ path, title, element, children }: IRouter) => {
    return (
      <Route key={title} path={path} element={element}>
        {children && <Route>{renderRoutes(children)}</Route>}
      </Route>
    );
  });
};

const Router = () => {
  const pageRoutes = renderRoutes(allRoutes);

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
